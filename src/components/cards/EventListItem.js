import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../common/Colors'
import Divider from '../common/Divider';
import moment from 'moment';

moment.locale('en');
class EventListItem extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { container, subContainerStyle, nameStyle, subStyle, shortDescriptionStyle } = styles
    const { item : event } = this.props
    const { title, subtitle, start, end } = event || { }
    
    const eventStartTime = moment.unix(start)
    const eventEndTime = moment.unix(end)
    
    eventText = `${eventStartTime.format('LLLL')} - ${eventEndTime.format('hh:mm a')}`

      return (
        <TouchableOpacity style={[container]} onPress={() => this.props.onPress(event)}>
            <Text style={nameStyle} ellipsizeMode='tail' numberOfLines={1}>{title ? title.toUpperCase() : ''}</Text>
            <View style={subContainerStyle}>
                <Text style={subStyle} numberOfLines={2}>{subtitle ? subtitle.toUpperCase() : ''}</Text>
            </View>
            <Text style={shortDescriptionStyle}>{eventText}</Text>
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

export default EventListItem