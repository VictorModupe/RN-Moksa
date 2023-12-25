/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { TouchableOpacity, StyleSheet, View, Image, Text, TouchableWithoutFeedback } from 'react-native'
import Colors from './Colors'
import Button from './Button';
import { isIphoneXorAbove } from '../../utils/utils';
import { CachedImage } from 'react-native-cached-image';
import env from '../../../env';

let forceKeepFallback = false
let initialRender = false

class Card extends Component<Props> {

    render(){
        const { item, onCardPress, onActionPress, expanded, expanding, onDismissed, showAction } = this.props
        const { container, cardContainer, cardContentContainer, textContainer, titleStyle, subtitleStyle, cardImageStyle, cardActionContainer, cardActionBackground, loginButtonStyle } = styles
        const { title, caption, image, button_text, fallbackSource } = item
        
        const source = image && image != "" ? { uri : `${env.API_BASE_URL}${image}` } : fallbackSource
        const imageHeightWithAction = showAction ? { height : '75%' } : { flex: 1}

        const ExpandedView = item.view
        if(!expanding && expanded) {
            return <View style={cardContentContainer}><ExpandedView onDismissed={onDismissed} title={title} /></View> 
        }
        return (
            <View style={container} onPress={onCardPress}>
            <TouchableWithoutFeedback onPress={onCardPress}>
                <View style={cardContainer}>
                    <View style={cardContentContainer}>
                        <View style={textContainer}>
                            <Text style={titleStyle}>{title ? title.toUpperCase() : ''}</Text>
                            <Text style={subtitleStyle}>{ caption ? caption.toUpperCase() : '' }</Text>
                        </View>
                        <Image style={cardImageStyle} source={source} defaultSource={(!this.initialRender || this.forceKeepFallback) ? fallbackSource : undefined} fallbackSource={(!this.initialRender || this.forceKeepFallback) ? fallbackSource : undefined} onLoadEnd={() => this.initialRender = true } onError={() => this.forceKeepFallback = true }/>
                    </View>
                    {showAction && 
                        <View style={cardActionContainer}>
                            <View style={cardActionBackground} />
                            <View style={{ flex : 1,  top : '0%' }}>
                            <Button label={button_text} style={loginButtonStyle} onPress={onActionPress} uppercase />
                            </View>
                        </View>
                    }
                </View>
            </TouchableWithoutFeedback>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex : 1, 
        overflow :'hidden' 
    },
    cardContainer : {
        width : '100%', 
        height : '100%', 
        overflow :'hidden'
    },
    cardContentContainer : { 
        width : '100%', 
        height : '100%', 
        backgroundColor : Colors.TRUE_WHITE, 
        borderRadius : 30,
        padding : 15,
    },
    cardActionContainer: {
        position : 'absolute',
        top : '82.5%',
        width: '100%',
    },
    cardActionBackground: {
        backgroundColor : Colors.CARD_BACKGROUND,
        position : 'absolute',
        justifyContent : 'center',
        alignItems : 'center',
        width: '100%',
        height: 250,
        borderRadius: 125,
        transform: [
        {scaleX: 2}
        ],
    },
    textContainer : {
        marginTop : 15,
        marginBottom : 30,
        alignItems : 'center' 
    },
    titleStyle : {
        fontSize : 25,
        marginBottom : 10,
        fontFamily : 'TradeGothicLT-Bold'
    },
     subtitleStyle : {
        color : '#646060',
        fontFamily : 'TradeGothicLT-Light'
     },
     cardImageStyle : {
        flex: 1, 
        borderRadius : 20,
        overflow :'hidden' 
    },
    loginButtonStyle : { 
      backgroundColor : Colors.TRUE_WHITE,
      color : Colors.DARK_GREY,
      marginTop : isIphoneXorAbove() ? 25 : 20
    },
});

export default Card