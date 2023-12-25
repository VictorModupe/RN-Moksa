import React, {Component} from 'react'
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Text, LayoutAnimation, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import CardDetailModal from '../modal/CardDetailModal';
import CardHeader from './CardHeader';
import EventListItem from './EventListItem';
import EventItem from './EventItem';
import { getEvents } from '../../actions/events';
import ModalFlatList from '../common/ModalFlatList';

class Events extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem : undefined,
            section: 0,
        }
        this.props.getEvents()
    }

    componentWillUpdate() {
        const animation = {...LayoutAnimation.Presets.spring, duration : 350 }

        LayoutAnimation.configureNext(animation);
    }

    renderItem = ({ item }) => {

        return (
            <EventListItem item={item} onPress={(event) => {
                this.setState({ selectedItem : event })
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

    onUpcoming = () => {
        this.setState({ section: 0 })
    }

    onArchive = () => {
        this.setState({ section: 1 })
    }

    render () {
        const { container, eventTypeContainerStyle, eventTypeStyle, eventTypeSelectedStyle } = styles
        const { items, loading } = this.props
        const { selectedItem, section } = this.state
        
        const currentDate = new Date()
        const currentEpoch =  parseInt(currentDate.getTime() / 1000)
        
        const filteredItems = items.filter(({ start, end }) => {
            if(section == 0) {
                return end > currentEpoch
            } else {
                return currentEpoch > end
            }
        })

        const sorted = filteredItems.sort((a, b) => {
            if(section == 0) {
                return a.end - b.end
            }
            return b.end - a.end
        })
        
        
        return (
            <View style={[container]}>
                <CardDetailModal itemView={EventItem} onDisableSwipe={this.props.onDisableSwipe} isModalVisible={selectedItem != undefined} item={selectedItem} onDismissed={this.onDetailItemClosed}/>
                <CardHeader title={`EVENTS`} onClose={this.props.onDismissed}/>
                <View style={eventTypeContainerStyle}>
                    <TouchableOpacity onPress={this.onUpcoming}>
                        <Text style={[eventTypeStyle, section == 0 ? eventTypeSelectedStyle : {} ]}>Upcoming</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onArchive}>
                        <Text style={[eventTypeStyle, section == 1 ? eventTypeSelectedStyle : {}]}>Archive</Text>
                    </TouchableOpacity>
                </View>
                {loading && 
                    <View style={{ flex : 1, justifyContent : 'center', alignItems: 'center' }}><ActivityIndicator /></View> }
                {!loading && 
                <ModalFlatList
                    onDisableSwipe={this.props.onDisableSwipe}
                    style={{ flex : 1 }}
                    data={sorted}
                    keyExtractor={item => `${item.id}`}
                    renderItem={this.renderItem}
                    refreshControl={
                        <RefreshControl
                        refreshing={false}
                        onRefresh={() => {
                            this.props.getEvents() 
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
    eventTypeContainerStyle : {
        flexDirection : 'row', 
        justifyContent : 'space-around', 
        margin : 15,
    },
    eventTypeStyle : {
        fontSize : 14,
        fontFamily : 'TradeGothicLT-Light',
        color : 'grey',
        padding : 15,
    },
    eventTypeSelectedStyle : {
        color : 'black'
    }
});

const mapStateToProps = ({ events }) => {
    const { eventsList, loading } = events

    return { items : eventsList , loading }
}

export default connect(mapStateToProps, { getEvents })(Events)