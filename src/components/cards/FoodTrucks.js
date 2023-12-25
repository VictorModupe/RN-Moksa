import React, {Component} from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList, Text, LayoutAnimation, RefreshControl, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import CardDetailModal from '../modal/CardDetailModal';
import CardHeader from './CardHeader';
import FoodTruckListItem from './FoodTruckListItem';
import FoodTruckItem from './FoodTruckItem';
import { getFoodTrucks } from '../../actions/foodtrucks';
import moment from 'moment'
import ModalFlatList from '../common/ModalFlatList';

class FoodTrucks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem : undefined,
        }
        this.props.getFoodTrucks(0)
    }

    componentWillUpdate() {
        const animation = {...LayoutAnimation.Presets.spring, duration : 350 }

        LayoutAnimation.configureNext(animation);
    }

    renderItem = ({ item }) => {

        return (
            <FoodTruckListItem item={item} onPress={(foodTruck) => {
                this.setState({ selectedItem : foodTruck })
                setTimeout(() => {
                    this.props.onDisableSwipe(true)
                }, 500)
            }} />
        );
    }

    onDetailItemClosed = () => {
        this.setState({ selectedItem : undefined })
        this.props.onDisableSwipe(false)
    }

    onSortByDate = () => {
        this.props.getFoodTrucks(0)
    }

    onSeeAll = () => {
        this.props.getFoodTrucks(1)
    }

    withEvents = (items) => {
        const list = []
        const count = items.length

        for(let i = 0; i < count; i++) {
            const item = items[i]
            const { events :  itemEvents } = item
            if(itemEvents && itemEvents.length > 0) {
                list.push(item)
            }
        }
        
        return list
    }

    getTodays = (items) => {
        const list = []
        const count = items.length
        const today = moment.utc().startOf('day')

        for(let i = 0; i < count; i++) {
            const item = items[i]
            const events = []
            const { events :  itemEvents } = item
            for(let e = 0; e < itemEvents.length; e++) {
                const event = itemEvents[e]
                if(event.start >=  today ) {
                    events.push(event)
                }
            }

            if(events.length > 0) {
                list.push({...item, events})
            }
        }
        
        return list
    }

    render () {
        const { container, sortContainerStyle, sortTypeStyle, sortTypeSelectedStyle } = styles
        const { items, loading, selectedSort } = this.props
        const { selectedItem } = this.state
        let list = [...items]

        if(selectedSort == 0) {
            list = this.withEvents(list)
        } else {
            list = list.sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            })
        }
        
        return (
            <View style={[container]}>
                <CardDetailModal itemView={FoodTruckItem} onDisableSwipe={this.props.onDisableSwipe} isModalVisible={selectedItem != undefined} item={selectedItem} onDismissed={this.onDetailItemClosed}/>
                <CardHeader title={`Food Trucks`} onClose={this.props.onDismissed}/>
                <View style={sortContainerStyle}>
                    <TouchableOpacity onPress={this.onSortByDate}>
                        <Text style={[sortTypeStyle, selectedSort == 0 ? sortTypeSelectedStyle : {} ]}>By Date</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onSeeAll}>
                        <Text style={[sortTypeStyle, selectedSort == 1 ? sortTypeSelectedStyle : {}]}>See All</Text>
                    </TouchableOpacity>
                </View>
                {loading && 
                    <View style={{ flex : 1, justifyContent : 'center', alignItems: 'center' }}><ActivityIndicator /></View> }
                {!loading && 
                <ModalFlatList
                    style={{ flex : 1 }}
                    data={list}
                    keyExtractor={item => `${item.sort_index}`}
                    renderItem={this.renderItem}
                    onDisableSwipe={this.props.onDisableSwipe}
                    refreshControl={
                        <RefreshControl
                        refreshing={false}
                        onRefresh={() => {
                            this.props.getFoodTrucks(selectedSort)
                            this.props.onDisableSwipe(false)
                        }}
                        />
                    }  /> 
                }
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    sortContainerStyle : {
        flexDirection : 'row', 
        justifyContent : 'space-around', 
        margin : 15,
    },
    sortTypeStyle : {
        fontSize : 14,
        fontFamily : 'TradeGothicLT-Light',
        color : 'grey',
        padding : 15,
    },
    sortTypeSelectedStyle : {
        color : 'black'
    }
});

const mapStateToProps = ({ foodtrucks }) => {
    const { foodTrucks, loading, selectedSort } = foodtrucks
    const filteredTrucks = foodTrucks.filter(({ active, hidden}) => active && !hidden)
    const items = []
    
    for(let i = 0; i < filteredTrucks.length; i++){
        const truck = filteredTrucks[i]
        const { events } = truck
        if(!events || events.length == 0) {
            
            items.push(truck) 
            continue;
        }
        for(let e = 0; e < events.length; e++) {
            items.push({ ...truck, events: [events[e]] })
        }
    }
    return { items , loading, selectedSort }
}

export default connect(mapStateToProps, { getFoodTrucks })(FoodTrucks)