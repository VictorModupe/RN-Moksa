import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../common/Colors'
import Divider from '../common/Divider';
import moment from 'moment'

class FoodTruckListItem extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { container, subContainerStyle, nameStyle, subStyle, shortDescriptionStyle } = styles
    const { item : foodTruck } = this.props
    const { title, type, menu_sample : menuSample, description, events } = foodTruck
    const firstEvent = events.length > 0 ? events[0] : undefined
    let firstEventText = ''
    if(firstEvent) {
        const { start, end } = firstEvent
        const eventStartTime = moment.unix(start)
        const eventEndTime = moment.unix(end)
        
        firstEventText = `${eventStartTime.format('LLLL')} - ${eventEndTime.format('hh:mm a')}`
    }
      
      return (
        <TouchableOpacity style={[container]} onPress={() => this.props.onPress(foodTruck)}>
            <Text style={nameStyle} ellipsizeMode='tail' numberOfLines={1}>{title ? title.toUpperCase() : ''}</Text>
            <View style={subContainerStyle}>
                <Text style={subStyle}>{type ? type.toUpperCase() : ''}</Text>
            </View>
            <Text style={shortDescriptionStyle} ellipsizeMode='tail' numberOfLines={1}>{firstEventText}</Text>
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
});

export default FoodTruckListItem