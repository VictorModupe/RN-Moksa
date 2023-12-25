import React, {Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import env from '../../../env';
import Colors from '../common/Colors';
import DetailContainer from './DetailContainer';
import { archiveMessage, unarchiveMessage, readMessage } from '../../actions/notifications';

class MessageItem extends Component {

    constructor(props) {
        super(props);

        //this.props.readMessage(props.item)
    }

    archiveMessage = () => {
        const { item : message } = this.props
        const { start, archive } = message
        if(archive) {
            this.props.unarchiveMessage(message)
        } else {
            this.props.archiveMessage(message)
        }

        this.props.onDismissed()
    }

    aboveTitleView = () => {
        const { item : message, user } = this.props
        const { start, archive } = message
        const date = start ? new Date(start * 1000).toDateString() : '';

        return (
            <View style={{ width : '100%', flexDirection : 'row', alignItems : 'center', justifyContent : 'space-between'}}>
                <Text>{date}</Text>
                <TouchableOpacity style={{ padding : 15}} onPress={this.archiveMessage}>
                    <Text>{archive ? 'Un-Archive' : 'Archive'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render () {
        const { container, subContainerStyle, detailStyle, subStyle } = styles
        const { item : message, clientConfig } = this.props
        const { default_message_image } = clientConfig || { }
        const defaultImage = default_message_image ? { uri : `${env.API_BASE_URL}/assets/img/${default_message_image}` } : require('../../assets/events_card.png')

        if(!message) {
            return <View />
        }

        const { title, details, photo, archive } = message
        const images = [ photo ? { uri : `${env.API_BASE_URL}/assets/img/${photo}` } : defaultImage ]
        
        return (
            <DetailContainer onDisableSwipe={this.props.onDisableSwipe} style={[container]} backTitle={archive ? 'Archive' : 'Messages'} itemTitle={title} images={images} onClose={this.props.onDismissed} aboveTitleView={this.aboveTitleView}>
                <View />
                <Text style={subStyle}>{details}</Text>
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
    const { user, clientConfig } = authentication

    return { user, clientConfig }
}

export default connect(mapStateToProps, { archiveMessage, unarchiveMessage, readMessage  })(MessageItem)