import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'
import { connect } from 'react-redux'
import env from '../../../env';
import Colors from '../common/Colors';
import DetailContainer from './DetailContainer';

class FoodTruckItem extends Component {

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
        const { container, subContainerStyle, subStyle, bottomSection, quadStyle, quadHalf, quadHalfDivider, quadTitleStyle, quadTextStyle } = styles
        const { item : foodTruck, user } = this.props

        if(!foodTruck) {
            return <View />
        }

        const { title, link, menu_sample, description, files, events } = foodTruck
        let images = [require('../../assets/food_truck_card.png')]
        if(files && files.length > 0) {
            images = files.map(({ path }) => {
                return { uri : `${env.API_BASE_URL}${path}` }
            }) 
        }
        const atMoksaDates = events.map((event) => event.title )

        return (
            <DetailContainer onDisableSwipe={this.props.onDisableSwipe} style={[container]} backTitle={title} itemTitle={title} images={images} onClose={this.props.onDismissed} hideClose hideDetailTitle showCenterTitle>
                <View style={[subContainerStyle, { width : '100%', justifyContent : 'flex-end'}]}>
                    <TouchableOpacity onPress={() => { this.handleUrl(link) }}>
                    <Text style={[subStyle, { flex : 1 , textAlign : 'right' }]}>{link}</Text>
                    </TouchableOpacity>
                </View>
                <View style={bottomSection}>
                    <View style={quadHalf}>
                        <View style={[quadStyle, { paddingRight : 10}]}>
                            <Text style={quadTitleStyle}>Menu Sample</Text>
                            <Text numberOfLines={4} style={quadTextStyle}>{menu_sample.trim()}</Text>
                        </View>
                    </View>
                    <View style={quadHalfDivider}/>
                    <View style={quadHalf}>
                        <View style={[quadStyle, { paddingLeft : 10}]}>
                            <Text style={quadTitleStyle}>At Moksa</Text>
                            <Text numberOfLines={4} style={quadTextStyle}>{atMoksaDates.join('\n')}</Text>
                        </View>                            
                    </View>
                </View>
                <Text style={[subStyle, { flex : 1, marginTop : 25 }]}>{description}</Text>
            </DetailContainer>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    subContainerStyle : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 15,
        marginBottom : 15,
    },
    quadTitleStyle : {
        fontFamily : 'TradeGothicLT-Light',
        fontSize : 15,
        color : Colors.DARK_GREY,
        paddingTop : 5,
        paddingBottom : 5,
    },
    quadTextStyle : {
        fontFamily : 'TradeGothicLT-Bold',
        fontSize : 15,
        color : Colors.DARK_GREY,
        paddingRight : 5,
    },
    subStyle : {
        fontFamily : 'TradeGothicLT-Bold',
        fontSize : 15,
        color : Colors.DARK_GREY,
        paddingTop : 5,
        paddingBottom : 5,
    },
    quadHalf : {
        flex : 1, 
    },
    quadDivider : {
        height : 1,
        backgroundColor : Colors.LIGHT_GREY,
        width : '90%',
        marginLeft : 5,
        marginRight : 5
    },
    quadStyle : {
        height : '100%',
        flex : 1,
    },
    quadRightStyle : {
        paddingLeft : 10
    },
    quadHalfDivider : {
        width : 1, 
        backgroundColor : Colors.LIGHT_GREY,
        height : '100%'
    },
    bottomSection : {
        width : '100%', 
        flexDirection : 'row',
        height : 100
    }
});

const mapStateToProps = ({ authentication }) =>{
    const { user } = authentication

    return { user }
}

export default connect(mapStateToProps, {  })(FoodTruckItem)