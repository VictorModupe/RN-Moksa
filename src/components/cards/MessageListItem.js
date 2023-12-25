import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../common/Colors'
import Divider from '../common/Divider';
import moment from 'moment';

moment.locale('en');
class MessageListItem extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { container, subContainerStyle, nameStyle, subStyle, readStyle, shortDescriptionStyle } = styles
    const { item : message } = this.props
    const { title, body, start, topic, end, unread } = message
    
    let eventStartTime = undefined
    let eventEndTime = undefined
    
    let timeText = ''
    if(start && end) {
      eventStartTime = moment.unix(start)
      eventEndTime = moment.unix(end)
      timeText = `${eventStartTime.format('LLLL')} - ${eventEndTime.format('hh:mm a')}`
    } else if(start) {
      eventStartTime = moment.unix(start)
        timeText = `${eventStartTime.format('LLLL')}`
    }
    
    const unreadStyle = unread ? { } : readStyle

      return (
        <TouchableOpacity style={[container, unreadStyle]} onPress={() => this.props.onPress(message)}>
            <Text style={[nameStyle]} ellipsizeMode='tail' numberOfLines={1}>{title ? title.toUpperCase() : ''}</Text>
            {body && 
              <View style={subContainerStyle}>
                  <Text style={subStyle} ellipsizeMode='tail' numberOfLines={1}>{body ? body.toUpperCase() : ''}</Text>
              </View>
            }

            <View style={subContainerStyle}>
                <Text style={[shortDescriptionStyle, { flex : 2 }]} ellipsizeMode='tail' numberOfLines={1}>{timeText}</Text>
                <Text style={[subStyle, { flex : 1 , textAlign : 'right' }]}>{topic}</Text>
            </View>
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
    readStyle : {
      opacity: .5
    }
});

export default MessageListItem