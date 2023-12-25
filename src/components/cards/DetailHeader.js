import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Divider from "../common/Divider";
import CloseButton from '../common/CloseButton';
import { BackArrow } from "../icons";
import { isIphoneXorAbove } from '../../utils/utils';

export default DetailHeader = ({ title, onClose, hideClose, showCenterTitle }) => {
    const { headerContainerStyle, backTitleStyle, titleStyle, closeContainerStyle, closeStyle } = style
    const showBackTitle = !isIphoneXorAbove()
    const centerTitleStyle = showCenterTitle ? { justifyContent: 'center', width: '100%'} : {}
    return (
        <View>
            <View style={headerContainerStyle}>
            <View>
                <TouchableOpacity style={[closeContainerStyle, centerTitleStyle]} onPress={onClose}>
                    {!hideClose && <CloseButton style={[closeStyle, ]} icon={BackArrow} />}
                    {!showCenterTitle && showBackTitle && <Text style={backTitleStyle}>{title}</Text> }
                    {showCenterTitle && <Text style={titleStyle}>{title ? title.toUpperCase() : ''}</Text>}
                </TouchableOpacity>
            </View>
            </View>
            <Divider />
        </View>
    )
}

const style = {
    headerContainerStyle : {
        paddingTop : 10, 
        paddingBottom : 10,
    },
    closeContainerStyle : {
        flexDirection : 'row',
        alignItems : 'center', 
        padding : 15,
        width : 150,
    },
    closeStyle : {
      color : 'black',
      height : 20,
      width : 20,
    },
    backTitleStyle : {
        fontFamily : 'TradeGothicLT-Light',
        marginLeft : 15,
    },
    titleStyle : {
        marginTop : 5,
        fontSize : 25,
        fontFamily : 'TradeGothicLT-Bold',
        color : 'black',
        fontWeight : '900'
    },
}