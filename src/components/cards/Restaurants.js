import React, {Component} from 'react'
import { ActivityIndicator, StyleSheet, View, FlatList, Text, LayoutAnimation, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import CardHeader from './CardHeader';
import RestaurantListItem from './RestaurantListItem';
import { getRestaurants } from '../../actions/restaurants';

class Restaurants extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem : undefined
        }
        this.props.getRestaurants()
    }

    componentWillUpdate() {
        const animation = {...LayoutAnimation.Presets.spring, duration : 350 }

        LayoutAnimation.configureNext(animation);
    }

    renderItem = ({ item }) => {
        return (
            <RestaurantListItem item={item} onPress={(restaurant) => {
                
            }} />
        )
    }

    render () {
        const { container } = styles
        const { items, loading, title } = this.props
        
        return (
            <View style={[container]}>
                <CardHeader title={title} onClose={this.props.onDismissed}/>
                {loading && 
                    <View style={{ flex : 1, justifyContent : 'center', alignItems: 'center' }}><ActivityIndicator /></View> }
                {!loading && 
                <FlatList
                    style={{ flex : 1 }}
                    data={items}
                    keyExtractor={item => `${item.id}`}
                    renderItem={this.renderItem}
                    refreshControl={
                        <RefreshControl
                        refreshing={false}
                        onRefresh={() => {
                            this.props.getRestaurants() 
                            this.props.onDisableSwipe(false)
                        }}
                        />
                    } /> 
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

const mapStateToProps = ({ restaurants }) => {
    const { restaurantList, loading } = restaurants

    return { items : restaurantList , loading }
}

export default connect(mapStateToProps, { getRestaurants })(Restaurants)