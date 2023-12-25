import React, {Component} from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { changeBeerSection } from '../../actions/beermenu';
import env from '../../../env';
import Colors from '../common/Colors';
import DetailHeader from './DetailHeader';
import DetailContainer from './DetailContainer';
import { htmlDecode } from '../../utils/utils';

class BeerItem extends Component {

    constructor(props) {
        super(props);
    }

    renderQuadItem = (items, index) => {
        if(index + 1 > items.length) {
            return <View />
        }

        const {  quadTitleStyle, quadTextStyle } = styles
        const { title, text} = items[index] || {}

        return (
            <View key={title}>
                <Text style={quadTitleStyle}>{title}</Text>
                <Text numberOfLines={2} style={quadTextStyle}>{text}</Text>
            </View>
        )
    }

    render () {
        const { container, subContainerStyle, subStyle, bottomSection, quadStyle, quadHalf, quadDivider, quadHalfDivider, quadTitleStyle, quadTextStyle, quadRightStyle } = styles
        const { item : beer, user } = this.props

        if(!beer) {
            return <View />
        }

        const { name, style, abv_vol : abvVol, tasting_notes : tastingNotes, malts, hops, yeast, sugars, files } = beer

        const quadDetails = []
        if(malts.trim().length > 0) {
            quadDetails.push({ title: "Malts", text: malts.trim()})
        }
        if(hops.trim().length > 0) {
            quadDetails.push({ title: "Hops", text: hops.trim()})
        }
        if(yeast.trim().length > 0) {
            quadDetails.push({ title: "Yeast", text: yeast.trim()})
        }
        if(sugars.trim().length > 0) {
            quadDetails.push({ title: "Sugars", text: sugars.trim()})
        }
        
        let images = [require('../../assets/on_tap_card.png')]
        if(files && files.length > 0) {
            images = files.map(({ path }) => {
                return { uri : `${env.API_BASE_URL}${path}` }
            }) 
        }
        
        return (
            <DetailContainer onDisableSwipe={this.props.onDisableSwipe} style={[container]} backTitle={htmlDecode(name)} itemTitle={htmlDecode(name)} images={images} onClose={this.props.onDismissed} hideClose hideDetailTitle showCenterTitle>
                <View style={subContainerStyle}>
                    <Text style={[subStyle, { flex : 2 }]} ellipsizeMode='tail' numberOfLines={1}>{style ? style.toUpperCase() : ''}</Text>
                    <Text style={[subStyle, { flex : 1 , textAlign : 'right' }]}>{abvVol}% ABV</Text>
                </View>

                <View style={bottomSection}>
                    <View style={quadHalf}>
                        <View style={quadStyle}>
                            {this.renderQuadItem(quadDetails, 0)}
                        </View>
                        <View style={quadDivider}/>
                        <View style={quadStyle}>
                            {this.renderQuadItem(quadDetails, 2)}
                        </View>
                    </View>
                    <View style={quadHalfDivider}/>
                    <View style={quadHalf}>
                        <View style={[quadStyle, quadRightStyle]}>
                            {this.renderQuadItem(quadDetails, 1)}
                        </View>
                        <View style={quadDivider}/>
                        <View style={[quadStyle, quadRightStyle]}>
                            {this.renderQuadItem(quadDetails, 3)}
                        </View>
                    </View>
                </View>

                <Text style={[subStyle]}>{tastingNotes}</Text>
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
        height : '50%', 
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
        height : 150
    }
});

const mapStateToProps = ({ authentication }) =>{
    const { user } = authentication

    return { user }
}

export default connect(mapStateToProps, { changeBeerSection })(BeerItem)