
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback, Platform, Linking, Text, ScrollView, BackHandler } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Autolink from 'react-native-autolink';

import Colors from '../common/Colors'
import IconButton from '../common/IconButton'
import { OnTap, Food, MoFo, Events, InboxNew, Settings, Cross, Logout, BackArrow } from '../icons'
import DrawerItem from './DrawerItem'
import { settingsDrawer, mainCardsIndex, closeDrawer } from '../../actions/main';
import { logout } from '../../actions/authentication';
import { isIphoneXorAbove } from '../../utils/utils';

const MOKSA_ADDRESS = `5860 Pacific St, Rocklin, CA 95677`

class NavMenu extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.onClose()
            return true;
        });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    onNavigationSelected = (cardIndex) => {
        this.props.mainCardsIndex(cardIndex)
        this.onClose()
    }

    onClose = () => {
        this.props.closeDrawer()
    }

    onSettings = () => {
        this.props.settingsDrawer(true)
    }

    renderContactInfo = () => {
        return (
            <View>
                <TouchableOpacity onPress={() => console.log('Tester')}>
                    <Text>{'5860 Pacific St, Rocklin, CA 95677\n'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Tester')}>
                    <Text>{'(916) 824-1366\n'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Tester')}>
                    <Text>{'info@moksabrewing.com\n'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    onLogout = () => {
        this.props.logout()
    }

    handleMoksaAddress = () => {
        const url = Platform.OS == 'ios' ? `https://maps.apple.com/?daddr=${MOKSA_ADDRESS}` :`https://maps.google.com/maps?daddr=${MOKSA_ADDRESS}`

        this.handleUrl(url)
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

    render() {
        const { authenticated, drawerOpen } = this.props 
        const { closeStyle, closeContainerStyle, mofoStyle, textButtonStyle } = styles
        
        return (
            <View style={styles.containerStyle} pointerEvents={drawerOpen ? 'auto' : 'none'}>
                <TouchableOpacity style={closeContainerStyle} onPress={this.onClose}>
                    <IconButton style={closeStyle} icon={Cross} />
                    {!isIphoneXorAbove() && <Text style={{ marginLeft : 25, fontSize : 17, fontFamily : 'TradeGothicLT-Light' }}>Close</Text>}
                </TouchableOpacity>
                <ScrollView style={{ flex : 1 }} scrollEnabled={false}>
                    <DrawerItem icon={OnTap} iconStyle={{ marginLeft : 1 }} title={'On Tap'} onPress={() => this.onNavigationSelected(0) } bold/>
                    <DrawerItem icon={MoFo} title={`Food Trucks`} iconStyle={mofoStyle} onPress={() => this.onNavigationSelected(1)} bold/>
                    <DrawerItem icon={Food} title={'Delivery Options'} onPress={() => this.onNavigationSelected(2)} bold/>
                    <DrawerItem icon={Events} title={'Events'} onPress={() => this.onNavigationSelected(3)} bold/>
                </ScrollView>
                <View>
                    {authenticated && <DrawerItem  icon={Settings} title={'Settings & Profile'} onPress={this.onSettings} /> }
                    {authenticated && <DrawerItem icon={Logout} title={'Logout'} onPress={this.onLogout} /> }
                    {!authenticated && <DrawerItem icon={BackArrow} iconStyle={{ width: 30, height: 30}} title={'Login'} onPress={this.onLogout} /> }
                    <TouchableOpacity onPress={this.handleMoksaAddress}>
                        <Text style={[textButtonStyle]}>{`${MOKSA_ADDRESS}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.handleUrl(`tel:(916) 824-1366`) }}>
                        <Text style={[textButtonStyle]}>{`(916) 824-1366`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.handleUrl(`mailto:info@moksabrewing.com`) }}>
                        <Text style={[textButtonStyle]}>{'info@moksabrewing.com'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: { 
      flex : 1, 
      backgroundColor : Colors.DRAWER_WHITE,
      paddingTop : 25,
      paddingLeft : 25,
      paddingBottom : 15,
      paddingRight : 15,
      width : 300,
      justifyContent : 'space-between',
    },
    closeContainerStyle : {
        flexDirection : 'row', 
        alignItems : 'center',
        marginLeft : 10,
        marginBottom : 10
    },
    closeStyle : {
      color : 'black',
      fontFamily : 'TradeGothicLT-Light'
    },
    mofoStyle : { 
        height : 40, 
        width : 40,
        marginRight : 25 
    },
    textButtonStyle : {
        paddingTop : 10, 
        paddingBottom : 10,
    }
})

const mapStateToProps = ({ authentication, main }) => {
    const { authenticated } = authentication
    const { drawerOpen } = main

    return { authenticated, drawerOpen }
}

export default connect(mapStateToProps, { settingsDrawer, closeDrawer,  mainCardsIndex, logout })(NavMenu)