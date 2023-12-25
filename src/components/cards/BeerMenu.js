import React, {Component} from 'react'
import { TouchableOpacity, ActivityIndicator, StyleSheet, View, FlatList, Text, LayoutAnimation, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import BeerListItem from './BeerListItem';
import { changeBeerSection } from '../../actions/beermenu';
import CardDetailModal from '../modal/CardDetailModal';
import BeerItem from './BeerItem';
import CardHeader from './CardHeader';
import { getBeerMenu } from '../../actions/beermenu';
import ModalFlatList from '../common/ModalFlatList';

class BeerMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBeerItem : undefined
        }
        this.props.getBeerMenu()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.section !== this.props.section && this.flatlist){
            try {
                this.flatlist.scrollToIndex({ animated : false, index : 0})
            } catch {}
        }
    }

    componentWillUpdate() {
        const animation = {...LayoutAnimation.Presets.spring, duration : 350 }

        LayoutAnimation.configureNext(animation);
    }

    renderItem = ({ item }) => {
        return (
            <BeerListItem key={`${item.id}`} beer={item} bottlesOnly={this.props.section == 4} onBeerPressed={(beer) => {
                this.setState({ selectedBeerItem : beer})
                setTimeout(() => {
                    this.props.onDisableSwipe(true)
                }, 500)
                
            }} />
        );
    }

    onTapPressed = () => {
        const { section } = this.props
        if(section == 0) {
            return
        }
        this.props.changeBeerSection(0)
    }

    bottlesPressed = () => {
        const { section } = this.props
        if(section == 4) {
            return
        }
        this.props.changeBeerSection(4)
    }

    comingSoonPressed = () => {
        const { section } = this.props
        if(section == 1) {
            return
        }
        this.props.changeBeerSection(1)
    }

    archivePressed = () => {
        const { section } = this.props
        if(section == 2) {
            return
        }
        this.props.changeBeerSection(2)
    }

    onClose = () => {
        this.props.onDismissed();
    }

    onBeerItemClosed = () => {
        this.setState({ selectedBeerItem : undefined })
        this.props.onDisableSwipe(false)
    }

    render () {
        const { beerTypeContainerStyle, beerTypeStyle, beerTypeSelectedStyle } = styles
        const { beers, loading, section, title } = this.props
        const { selectedBeerItem } = this.state
        
        return (
            <View style={[styles.container]}>
                <CardDetailModal itemView={BeerItem} isModalVisible={selectedBeerItem != undefined} item={selectedBeerItem} onDismissed={this.onBeerItemClosed}/>
                <CardHeader title={title} onClose={this.onClose}/>
                <View style={beerTypeContainerStyle}>
                    <TouchableOpacity onPress={this.onTapPressed}>
                        <Text style={[beerTypeStyle, section == 0 ? beerTypeSelectedStyle : {} ]}>ON TAP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.bottlesPressed}>
                        <Text style={[beerTypeStyle, section == 4 ? beerTypeSelectedStyle : {}]}>BOTTLES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.comingSoonPressed}>
                        <Text style={[beerTypeStyle, section == 1 ? beerTypeSelectedStyle : {}]}>COMING SOON</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.archivePressed}>
                        <Text style={[beerTypeStyle, section == 2 ? beerTypeSelectedStyle : {}]}>ARCHIVE</Text>
                    </TouchableOpacity>
                </View>
                {loading && 
                    <View style={{ flex : 1, justifyContent : 'center', alignItems: 'center' }}><ActivityIndicator /></View> }
                {!loading && 
                <ModalFlatList
                    innerRef={(view) => this.flatlist = view}
                    onDisableSwipe={this.props.onDisableSwipe}
                    style={{ flex : 1 }}
                    data={beers}
                    keyExtractor={item => `${item.id}`}
                    renderItem={this.renderItem}
                    refreshControl={
                        <RefreshControl
                        refreshing={false}
                        onRefresh={() => {
                            this.props.getBeerMenu()
                            this.props.onDisableSwipe(false)
                        }}
                        />
                    }
                    /> 
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
    beerTypeContainerStyle : {
        flexDirection : 'row', 
        justifyContent : 'space-around', 
    },
    beerTypeStyle : {
        fontSize : 14,
        fontFamily : 'TradeGothicLT-Light',
        color : 'grey',
        padding : 10,
    },
    beerTypeSelectedStyle : {
        color : 'black'
    }
});

const mapStateToProps = ({ beermenu, authentication }) => {
    const { user } = authentication
    const { seciontBeers, loading, total, section } = beermenu

    const { permissions : userPermissions } = user || { }
    const permissions = userPermissions || []
    const isMember = permissions.includes('is_memberhood') || permissions.includes('is_advocator') || permissions.includes('is_aviator')
  


    return { beers: seciontBeers, loading, total, section, isMember : isMember }
}

export default connect(mapStateToProps, { changeBeerSection, getBeerMenu })(BeerMenu)