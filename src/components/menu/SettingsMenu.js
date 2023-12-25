
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, BackHandler } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Colors from '../common/Colors';
import IconButton from '../common/IconButton';
import { OnTap, Food, MoFo, Events, InboxNew, Settings, BackArrow } from '../icons'
import DrawerItem from './DrawerItem';
import { mainDrawer, switchToDrawer } from '../../actions/main';
import RadioButton from '../common/RadioButton';
import DrawerOption from './DrawerOption';
import { toggleNotification } from '../../actions/notifications';
import { isIphoneXorAbove } from '../../utils/utils';

class SettingsMenu extends Component {
    constructor(props) {
        super(props);

    };

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.onClose()
            return true;
        });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    onClose = () => {
        this.props.mainDrawer(true)
    }

    showUpdateProfile = () => {
        this.props.switchToDrawer('update_profile')
    }

    showUpdatePassword = () => {
        this.props.switchToDrawer('update_password')
    }

    showUpdateAvatar = () => {
        this.props.switchToDrawer('update_avatar')
    }

    render() {
        const { messageUserStatus, comingSoon, newReleases, events, foodTrucks, member, advocator, isMemberhood, isAdvocator, processingTopic, processingSubTopic } = this.props
        const { closeStyle, closeContainerStyle, updateContainerStyle, updateTextStyle } = styles

        const notificationsDisabledStyle = !messageUserStatus ? { color : 'grey' } : { }

        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity style={closeContainerStyle} onPress={this.onClose}>
                    <IconButton style={closeStyle} icon={BackArrow} />
                    {!isIphoneXorAbove() && <Text style={{ marginLeft : 25, fontSize : 17, fontFamily : 'TradeGothicLT-Light' }}>Menu</Text>}
                </TouchableOpacity>

                <ScrollView style={{ flex : 1 }}>
                    <View style={{ paddingRight : 10 }}>
                        <DrawerOption textStyle={{ fontFamily : 'TradeGothicLT-Bold' }} title={'Notifications'} selected={messageUserStatus} onPress={() => this.props.toggleNotification('messageUserStatus') } loading={processingTopic == 'messageUserStatus'}/>
                        <View style={{ paddingLeft : 10 }}>
                            <DrawerOption style={notificationsDisabledStyle} textStyle={notificationsDisabledStyle} title={'Coming Soon'} selected={comingSoon}  onPress={() => this.props.toggleNotification('comingSoon') } loading={processingSubTopic == 'comingSoon' || processingTopic == 'comingSoon'}/>
                            <DrawerOption style={notificationsDisabledStyle} textStyle={notificationsDisabledStyle} title={'New Releases'} selected={newReleases}  onPress={() => this.props.toggleNotification('newReleases') } loading={processingSubTopic == 'newReleases' || processingTopic == 'newReleases'}/>
                            <DrawerOption style={notificationsDisabledStyle} textStyle={notificationsDisabledStyle} title={'Events'} selected={events}  onPress={() => this.props.toggleNotification('events') } loading={processingSubTopic == 'events' || processingTopic == 'events'}/>
                            <DrawerOption style={notificationsDisabledStyle} textStyle={notificationsDisabledStyle} title={'Food Trucks'} selected={foodTrucks}  onPress={() => this.props.toggleNotification('foodTrucks') } loading={processingSubTopic == 'foodTrucks' || processingTopic == 'foodTrucks'}/>
                            { isMemberhood && <DrawerOption style={notificationsDisabledStyle} textStyle={notificationsDisabledStyle} title={'Member Notifications'} selected={member} onPress={() => this.props.toggleNotification('member') }  loading={processingSubTopic == 'member' || processingTopic == 'member'}/> }
                            { isAdvocator && <DrawerOption style={notificationsDisabledStyle} textStyle={notificationsDisabledStyle} title={'Advocator Notifications'} selected={advocator}  onPress={() => this.props.toggleNotification('advocator') } loading={processingSubTopic == 'advocator' || processingTopic == 'advocator'}/> }
                        </View>
                    </View>

                    <View style={updateContainerStyle}>
                        <TouchableOpacity onPress={() => this.showUpdateProfile()}>
                            <Text style={updateTextStyle}>Update Profile</Text>
                        </TouchableOpacity>
                        { (isMemberhood || isAdvocator) &&
                            <TouchableOpacity onPress={() => this.showUpdateAvatar()}>
                                <Text style={updateTextStyle}>Update Photo</Text>
                            </TouchableOpacity>
                        }
                        <TouchableOpacity onPress={() => this.showUpdatePassword()}>
                            <Text style={updateTextStyle}>Update Password</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
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
    },
    closeContainerStyle : {
        flexDirection : 'row', 
        alignItems : 'center',
        marginBottom : 20
    },
    closeStyle : {
      color : 'black'
    },
    updateTextStyle : { 
        fontSize : 17,
        paddingTop : 15,
        paddingBottom : 15,
        fontFamily : 'TradeGothicLT-Bold',
    },
    updateContainerStyle : {
        marginTop : 20,
    }
})

const mapStateToProps = ({ notifications, authentication }) => {
    const { messageUserStatus, comingSoon, newReleases, events, foodTrucks, member, advocator, processingTopic, processingSubTopic } = notifications
    const { user } = authentication
    const { permissions : userPermissions } = user || { }
    const permissions = userPermissions || []
    const isMemberhood = permissions.includes('is_memberhood')
    const isAdvocator = permissions.includes('is_advocator') || permissions.includes('is_aviator')
    
    
    return { messageUserStatus, comingSoon, newReleases, events, foodTrucks, member, advocator, isMemberhood, isAdvocator, processingTopic, processingSubTopic } 
}
export default connect(mapStateToProps, { mainDrawer, toggleNotification, switchToDrawer })(SettingsMenu)