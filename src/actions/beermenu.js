import { BEER_MENU_SUCCESS, BEER_MENU_LOADING, BEER_MENU_SECTION, BEER_MENU_SECTION_BEERS, BEER_MENU_LOADING_END } from './types'
import { setError, processException } from './errors'
import axios from 'axios'
import BeerListItem from '../components/cards/BeerListItem';

const ON_TAP = 0
const PRE_RELEASE = 1
const ARCHIVE = 2
const DRAFT = 3
const BOTTLES = 4

const BEER_MENU_ENDPOINT = '/v1/beermenu'

export const getBeerMenu = () => {
    return async (dispatch, getStore) => {
        try {
            dispatch({ type : BEER_MENU_LOADING })
            const { data } = await axios.get(BEER_MENU_ENDPOINT)
            let { results, total } = data

            results = results.map((beer) => {
                let { dm_glass_pour_price, dm_taster_price, dm_can_price, dm_crowler_price, dm_bottle_price, permissions, dm_serving_glass, dm_bottle_inhouse_price } = beer
                
                dm_glass_pour_price = scrubPrice(dm_glass_pour_price)
                dm_taster_price = scrubPrice(dm_taster_price)
                dm_crowler_price = scrubPrice(dm_crowler_price)
                dm_can_price = scrubPrice(dm_can_price)
                dm_bottle_price = scrubPrice(dm_bottle_price)
                dm_bottle_inhouse_price = scrubPrice(dm_bottle_inhouse_price)

                dm_serving_glass = dm_serving_glass || ''

                const servingGlasses = dm_serving_glass.split(',')

                const showPour = servingGlasses.includes('pour')
                const showTaster = servingGlasses.includes('taster')
                const showCrowler = servingGlasses.includes('crowler')
                const showCan = servingGlasses.includes('can') 
                const showBottle = servingGlasses.includes('bottle')
                const showInHouse = servingGlasses.includes('bottle-inhouse')

                const isBottleBeer = showBottle || showInHouse
                const isOtherBeer = showTaster || showPour || showCan || showCrowler
                const beerSection = calculateSectionForBeer(beer)
                
                let section = [beerSection]
                if(beerSection == ON_TAP && isBottleBeer) {
                    section = isOtherBeer ? [ON_TAP, BOTTLES] : [BOTTLES]
                }
                
                return { ...beer, permissions : permissions ? permissions.filter(perm => perm != '') : [], section, dm_glass_pour_price, dm_taster_price, dm_can_price, dm_crowler_price, dm_bottle_price, dm_bottle_inhouse_price, showPour, showTaster, showCan, showCrowler, showBottle, isBottleBeer, showInHouse }
            })
            setTimeout(() => {

                const { beermenu } = getStore()
                const { section } = beermenu
                const sectionBeers = results.filter(beer => beer.section.includes(section))
                
                dispatch({ type : BEER_MENU_SUCCESS, payload :  { results, total } })
                dispatch({  type : BEER_MENU_SECTION_BEERS,  payload : sectionBeers })
            }, 100);
        } catch (error) {
            const { message, status } = processException(error, dispatch)

            dispatch(setError(message))
        }
    }
}

const scrubPrice = (price) => {
    const floatPrice = parseFloat(price ? price : 0)
    const formattedPrice = floatPrice.toFixed(2)

    return formattedPrice
}

export const changeBeerSection = (section) => {
    return async (dispatch, getStore) => {
        dispatch({  type : BEER_MENU_SECTION,  payload : section })
        dispatch({ type : BEER_MENU_LOADING })

        setTimeout(() => {
            const { beermenu, user } = getStore()
            const { beerMenuList } = beermenu
            const { permissions : userPermissions } = user || { }
            const permissions = userPermissions || []
    
            const beers = beerMenuList.filter(beer => {
                    if(section === 4 && beer.section.includes(4)) {
                        return (!beer.dm_bottle_inhouse_permissions || beer.dm_bottle_inhouse_permissions.length === 0) || 
                                permissions.includes(beer.dm_bottle_inhouse_permissions)
                    }

                    return beer.section.includes(section) && (
                        (!beer.permissions || beer.permissions.length == 0) || 
                        permissions.some( permission => beer.permissions.includes(permission)) 
                    )
                }
            )
            dispatch({  type : BEER_MENU_SECTION_BEERS,  payload : beers })
            dispatch({ type : BEER_MENU_LOADING_END })
        }, 500)
    }
}


const calculateSectionForBeer = (beer) => {
    const { release, pre_release : preRelease, archive } = beer
    if(release == 0 && preRelease == 0 && archive == 0) {
        return DRAFT
    }

    const currentDate = new Date()
    const currentEpoch =  parseInt(currentDate.getTime() / 1000)
    
    if(currentEpoch < release && currentEpoch < preRelease && currentEpoch < archive) {
        return DRAFT
    }
    
    const dateMapping = {}
    const dates = []
    if(release > 0 && currentEpoch >= release) {
        dateMapping[release] = ON_TAP
        dates.push(release)
    }
    
    if(preRelease > 0 && currentEpoch >= preRelease) {
        dateMapping[preRelease] = PRE_RELEASE
        dates.push(preRelease)
    }
    if(archive > 0 && currentEpoch >= archive) {
        dateMapping[archive] = ARCHIVE
        dates.push(archive)
    }
    
    
    dates.sort(function(a, b){return b - a});
    
    return dateMapping[dates[0]]
}