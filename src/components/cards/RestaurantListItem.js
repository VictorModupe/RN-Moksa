import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Colors from '../common/Colors'
import Divider from '../common/Divider';
import NumberFormat from 'react-number-format';

class RestaurantListItem extends Component {

  constructor(props) {
    super(props);
  }

  handleUrl = (url) => {
    Linking.canOpenURL(url).then((supported) => {
        if(!supported) {
            console.log(`Unsupported link: ${url}`)
            return;
        }

        Linking.openURL(url);
    }).catch((error) => {
        console.log(`Unable to open link: ${url}`, error)
    });
}

  render () {
    const { container, subContainerStyle, nameStyle, subStyle, shortDescriptionStyle } = styles
    const { item : restaurant } = this.props
    const { title, type, phone, hours, distance, is_walkable, link } = restaurant
    
    const walkableText = is_walkable ? ` (${distance} miles away)` : ''
    const restaurantTitle = `${title ? title.toUpperCase() : ''}${walkableText}`

      return (
        <TouchableOpacity style={[container]} onPress={() => this.props.onPress(restaurant)}>
            <Text style={nameStyle} ellipsizeMode='tail' numberOfLines={1}>{restaurantTitle}</Text>
            <View style={subContainerStyle}>
                <Text style={[subStyle, { flex : 2 }]} ellipsizeMode='tail' numberOfLines={1}>{type ? type.toUpperCase() : ''}</Text>
                <TouchableOpacity style={{ paddingLeft: 5, paddingRight: 5 }} onPress={() => this.handleUrl(`tel:${phone}`)}>
                    <NumberFormat style={{flex : 1 }} format="+1 (###) ###-####" displayType={'text'}  mask="_" value={phone} renderText={(formattedValue) => <Text style={[subStyle, { textAlign : 'right' }]}>{formattedValue.replace('+1 ', '').replace('+1', '')}</Text> }/>
                </TouchableOpacity>
            </View>
            <View style={subContainerStyle}>
                <Text style={[shortDescriptionStyle, { flex : 2 }]} ellipsizeMode='tail' numberOfLines={1}>{hours ? hours.toUpperCase() : ''}</Text>
                <TouchableOpacity style={{ paddingLeft: 5, paddingRight: 5 }} onPress={() => this.handleUrl(link)}>
                    <Text style={[subStyle, { flex : 1 , textAlign : 'right' }]}>Delivery</Text>
                </TouchableOpacity>
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
});

export default RestaurantListItem