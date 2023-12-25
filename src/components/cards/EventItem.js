import React, {Component} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import env from '../../../env';
import Colors from '../common/Colors';
import DetailContainer from './DetailContainer';

class EventItem extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { container, subContainerStyle, detailStyle, subStyle } = styles
        const { item : event, user } = this.props

        if(!event) {
            return <View />
        }

        const { title, description, files } = event
        let images = [require('../../assets/events_card.png')]
        if(files && files.length > 0) {
            images = files.map(({ path }) => {
                return { uri : `${env.API_BASE_URL}${path}` }
            }) 
        }

        return (
            <DetailContainer onDisableSwipe={this.props.onDisableSwipe} style={[container]} backTitle={title} itemTitle={title} images={images} onClose={this.props.onDismissed} hideClose hideDetailTitle showCenterTitle>
                <View style={subContainerStyle}>
                    <Text style={[detailStyle, { flex : 1 , textAlign : 'left' }]}>Details</Text>
                </View>
                <Text style={subStyle}>{description}</Text>
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
    detailStyle : {
        fontFamily : 'TradeGothicLT-Light',
        fontSize : 15,
        color : Colors.DARK_GREY,
        paddingTop : 5,
        paddingBottom : 5,
    },
    subStyle : {
        fontFamily : 'TradeGothicLT-Bold',
        fontSize : 15,
        color : Colors.DARK_GREY,
        paddingTop : 5,
        paddingBottom : 5,
    },
});

const mapStateToProps = ({ authentication }) =>{
    const { user } = authentication

    return { user }
}

export default connect(mapStateToProps, {  })(EventItem)