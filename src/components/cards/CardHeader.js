import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Divider from "../common/Divider";
import CloseButton from '../common/CloseButton';
import { Cross } from "../icons";

export default CardHeader = ({ title, onClose }) => {
    const { headerContainerStyle, titleStyle, closeContainerStyle, closeStyle, showClose } = style

    return (
        <View>
            <View style={headerContainerStyle}>
                <Text style={titleStyle}>{title ? title.toUpperCase() : ''}</Text>
                {showClose && 
                    <TouchableOpacity style={closeContainerStyle} onPress={onClose}>
                        <CloseButton style={closeStyle} icon={Cross} />
                    </TouchableOpacity>
                }
            </View>
            <Divider />
        </View>
    )
}

const style = {
    headerContainerStyle : {
        paddingTop : 5, 
        paddingBottom : 20,  
        alignItems : 'center', 
        justifyContent : 'center'
    },
    titleStyle : {
        marginTop : 5,
        fontSize : 25,
        fontFamily : 'TradeGothicLT-Bold',
        color : 'black',
        fontWeight : '900'
    },
    closeContainerStyle : {
        position : 'absolute',
        right : 0,
        padding : 5,
    },
    closeStyle : {
      color : 'black',
      height : 20,
      width : 20,
    },
}