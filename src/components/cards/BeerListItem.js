import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import Colors from '../common/Colors'
import { htmlDecode } from '../../utils/utils';


const Glass = () => <Image source={{ uri: 'pint'}} style={styles.iconStyle} resizeMode={'contain'} />
const Crowler = () => <Image source={{ uri: 'crowler'}} style={styles.iconStyle} resizeMode={'contain'} />
const Cans = () => <Image source={{ uri: 'cans'}} style={styles.iconStyle} resizeMode={'contain'} />
const Snifter = () => <Image source={{ uri: 'snifter'}} style={styles.iconStyle} resizeMode={'contain'} />
const Taster = () => <Image source={{ uri: 'taster'}} style={styles.iconStyle} resizeMode={'contain'} />
const Bottle = () => <Image source={{ uri: 'bottle'}} style={styles.iconStyle} resizeMode={'contain'} />


class BeerListItem extends Component {

  constructor(props) {
    super(props);
  }

  createBottlePriceItem = (price, Icon, key, style) => {
    const { memberItemStyle, iconStyle, memberItemTextStyle, itemLabelTextStyle } = styles

    return (
        <View style={memberItemStyle} key={key}>
            <Icon style={[iconStyle, style]} />
            <View>
                <Text style={itemLabelTextStyle}>{key}</Text>
                <Text style={memberItemTextStyle}>${price}</Text>
            </View>
        </View> 
    )
  }

  createPriceItem = (price, Icon, key, style) => {
    const { memberItemStyle, iconStyle, memberItemTextStyle } = styles

    return (
        <View style={memberItemStyle} key={key}>
            <Icon style={[iconStyle, style]} />
            <Text style={memberItemTextStyle}>${price}</Text>
        </View> 
    )
  }

  listBottlePrices = () => {
    const { memberRowStyle, memberItemStyle } = styles
    const { beer } = this.props
    const { dm_bottle_price: bottlePrice, showBottle, showInHouse, dm_bottle_inhouse_price: inHouseBottlePrice } = beer

    const priceViews = []
    if(showInHouse) {
        priceViews.push(this.createBottlePriceItem(inHouseBottlePrice, Bottle, 'In-Brewery'))
    }

    if(showBottle) {
        priceViews.push(this.createBottlePriceItem(bottlePrice, Bottle, 'To Go'))
    }

    
    return (
        <View style={memberRowStyle}>
            {priceViews}
        </View>
        )
  }

  listPrices = () => {
    const { beer, bottlesOnly } = this.props
    const { dm_glass_pour: glassPour, dm_glass_pour_price : glassPourPrice, dm_taster_price : tasterPrice, dm_crowler_price : crowlerPrice,  dm_can_price : canPrice, dm_bottle_price: bottlePrice, showPour, showTaster, showCrowler, showCan, showBottle, isBottleBeer } = beer  
    const { memberRowStyle, memberItemStyle } = styles

    const priceViews = []
    if(isBottleBeer && bottlesOnly) {
        return this.listBottlePrices()
    }

    if(showTaster) {
        priceViews.push(this.createPriceItem(tasterPrice, Taster, 'Taster'))
    }

    if(showPour) {
        const PourIcon = glassPour == 'pint' ? Glass : Snifter
        priceViews.push(this.createPriceItem(glassPourPrice, PourIcon, 'Pour'))
    }

    if(showCrowler) {
        priceViews.push(this.createPriceItem(crowlerPrice, Crowler, 'Crowler'))
    }

    if(showCan && priceViews.length < 3) {
        priceViews.push(this.createPriceItem(canPrice, Cans, 'Cans'))
    }

    if(priceViews.length == 2) {
        priceViews.push(<View key={'Spacer'} style={memberItemStyle} />)
    }

    if(priceViews.length == 0) {
        return <View />
    }
    
    return (
        <View style={memberRowStyle}>
            {priceViews}
        </View>
        )

  }

  render () {
    const { container, subContainerStyle, nameStyle, subStyle, shortDescriptionStyle, memberRowStyle, memberItemStyle, memberItemTextStyle, iconStyle } = styles
    const { beer } = this.props
    const { name, style, short_description : shortDescription, abv_vol: abvVol, dm_glass_pour_price : glassPourPrice, dm_taster_price : tasterPrice, dm_crowler_price : crowlerPrice,  dm_can_price : canPrice, showPour, showTaster, showCrowler  } = beer
    const hasAbvVol = abvVol && abvVol.trim().length > 0
    const abvView = hasAbvVol ? <Text style={[subStyle, { flex : 1 , textAlign: 'right'}]}>{abvVol}% ABV</Text> : <View />
      return (
        <TouchableOpacity style={[container]} onPress={() => this.props.onBeerPressed(beer)}>
            <Text style={nameStyle}>{ htmlDecode(name ? name.toUpperCase() : '')}</Text>
            <View style={subContainerStyle}>
                <Text style={[subStyle, { flex : hasAbvVol ? 2 : 1}]} ellipsizeMode='tail' numberOfLines={1}>{style ? style.toUpperCase() : ''}</Text>
                {abvView}
            </View>
            <Text style={shortDescriptionStyle}>{shortDescription}</Text>
            {this.listPrices()}
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
        container: {
        justifyContent: 'center',
        marginTop : 5,
        marginBottom : 5,
        borderBottomColor: "#B8B3B4",
        borderBottomWidth: .5,
    },
    nameStyle : {
        fontFamily : 'TrendSansOne',
        fontSize : 17,
        paddingTop : 5,
        paddingBottom : 5,
    },
    subContainerStyle : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    subStyle : {
        fontFamily : 'TradeGothicLT-Bold',
        fontSize : 17,
        color : Colors.DARK_GREY,
        paddingTop : 5,
        paddingBottom : 5,
    },
    shortDescriptionStyle: {
        fontFamily : 'TradeGothicLT-Light',
        fontSize : 14,
        color : Colors.DARK_GREY,
        paddingTop : 5,
        paddingBottom : 5,
        marginBottom : 10,
    },
    memberRowStyle : {
        marginBottom : 10,
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    memberItemStyle : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
    },
    itemLabelTextStyle : {
        marginLeft : 5,
        fontFamily : 'TradeGothicLT-Light',
        fontSize : 13,
    },
    memberItemTextStyle : {
        color : Colors.LIGHT_RED,
        marginLeft : 5,
        fontFamily : 'TradeGothicLT-Bold',
        fontSize : 16,
    },
    iconStyle : {
      height : 34,
      width : 34,
    },
});

export default BeerListItem