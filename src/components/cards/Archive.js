import React, {Component} from 'react';
import { ActivityIndicator, StyleSheet, View, FlatList, Text, LayoutAnimation, RefreshControl, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import CardDetailModal from '../modal/CardDetailModal';
import CardHeader from './CardHeader';
import MessageListItem from './MessageListItem';
import MessageItem from './MessageItem';
import Colors from '../common/Colors';
import ModalFlatList from '../common/ModalFlatList';

class Archive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem : undefined
        }
    }

    componentWillUpdate() {
        const animation = {...LayoutAnimation.Presets.spring, duration : 350 }

        LayoutAnimation.configureNext(animation);
    }

    renderItem = ({ item }) => {

        return (
            <MessageListItem item={item} onPress={(message) => {
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
        const { items, loading } = this.props
        const { selectedItem } = this.state
        
        return (
            <View style={[container]}>
                <CardDetailModal itemView={MessageItem} onDisableSwipe={this.props.onDisableSwipe} isModalVisible={selectedItem != undefined} item={selectedItem} onDismissed={this.onDetailItemClosed}/>
                <CardHeader title={`ARCHIVE`} onClose={this.props.onDismissed}/>
                {loading && 
                    <View style={{ flex : 1, justifyContent : 'center', alignItems: 'center' }}><ActivityIndicator /></View> }
                {!loading && 
                <ModalFlatList
                    style={{ flex : 1 }}
                    data={items}
                    keyExtractor={item => `${item.id}`}
                    onDisableSwipe={this.props.onDisableSwipe}
                    renderItem={this.renderItem} /> 
                }
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
    const items = messages.filter(({ archive }) => archive == true)

    return { items }
}

export default connect(mapStateToProps)(Archive)