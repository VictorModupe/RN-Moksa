import React, {Component} from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList, Text, LayoutAnimation, RefreshControl, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import CardDetailModal from '../modal/CardDetailModal';
import CardHeader from './CardHeader';
import MessageListItem from './MessageListItem';
import MessageItem from './MessageItem';
import Colors from '../common/Colors';
import CardModal from '../modal/CardModal';
import Archive from './Archive';
import { readMessage } from '../../actions/notifications';
import ModalFlatList from '../common/ModalFlatList';

class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem : undefined,
            showArchive : false
        }
    }

    componentWillUpdate() {
        const animation = {...LayoutAnimation.Presets.spring, duration : 350 }

        LayoutAnimation.configureNext(animation);
    }

    renderItem = ({ item }) => {
        const { readMessage } = this.props 

        return (
            <MessageListItem item={item} onPress={(message) => {
                readMessage(item)
                this.setState({ selectedItem : message })
                setTimeout(() => {
                    this.props.onDisableSwipe(true)
                }, 500)
            }} />
        );
    }

    onDetailItemClosed = () => {
        this.setState({ selectedItem : undefined })
        this.props.onDisableSwipe(false)
    }

    render () {
        const { container } = styles
        const { items, messages, loading } = this.props
        const { selectedItem, showArchive } = this.state
        
        return (
            <View style={[container]}>
                <CardDetailModal itemView={MessageItem} onDisableSwipe={this.props.onDisableSwipe} isModalVisible={selectedItem != undefined} item={selectedItem} onDismissed={this.onDetailItemClosed}/>
                <CardHeader title={`MESSAGES`} onClose={this.props.onDismissed}/>
                <CardModal modalView={Archive} isModalVisible={showArchive} 
                onDismissed={() => { 
                    this.props.onDisableSwipe(false)
                    this.setState({ showArchive : false })}
                } />

                {loading && 
                    <View style={{ flex : 1, justifyContent : 'center', alignItems: 'center' }}><ActivityIndicator /></View> }
                {!loading && 
                <ModalFlatList
                    extraData={{ messages, state: this.state}}
                    style={{ flex : 1 }}
                    data={items}
                    keyExtractor={item => `${item.id}`}
                    onDisableSwipe={this.props.onDisableSwipe}
                    renderItem={this.renderItem} /> 
                }
                <View style={{ width : '100%', paddingTop : 5, alignItems : 'center', justifyContent : 'center' }}>
                    <TouchableOpacity style={{ alignItems : 'center', justifyContent : 'center', width : 150, height : 40, borderRadius : 40, backgroundColor : Colors.DARK_GREY, zIndex : 10 }} 
                    onPress={() => { 
                        this.props.onDisableSwipe(true)
                        this.setState({ showArchive : true })}
                    } >
                        <Text style={{ fontFamily : 'TradeGothicLT-Light', color : Colors.WHITE }}>Archive</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
});

const mapStateToProps = ({ notifications }) => {
    const { messages } = notifications
    const items = messages.filter(({ archive }) => !archive)

    return { messages, items }
}

export default connect(mapStateToProps, { readMessage })(Messages)