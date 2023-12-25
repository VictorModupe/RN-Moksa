import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { NavIcon, InboxNew, Moksa } from '../icons';
import Colors from './Colors';
import ProfileModal from '../modal/ProfileModal';
import { mainDrawer, showProfileModal } from '../../actions/main';
import env from '../../../env';
import { isIphoneXorAbove } from '../../utils/utils';
import MutedCachedImage from './MutedCachedImage';

class NavBar extends Component {
	constructor(props) {
        super(props)
    }
    
    onNavDrawerPressed = () => {
        this.props.mainDrawer()
    }

    toggleProfileModal = () => {
        const { showProfile } = this.props
        
        this.props.showProfileModal(!showProfile)
    }

	render() {
        const { unread, showProfile, photo, authenticated, isMemberhood, isAdvocator } = this.props
        const { containerStyle, sectionStyle, navIconStyle, moksaStyle, sectionProfileStyle, inboxStyle, profileImageContainer, profileImage } = styles
        const imageSource = photo ? { uri : `${env.API_BASE_URL}${photo.url}` } : require('../../assets/placeholder_profile.jpg')

		return (
			<View style={containerStyle}>
            <ProfileModal isModalVisible={showProfile} onDismissed={this.toggleProfileModal}  />
                    <TouchableOpacity style={sectionStyle} onPress={this.onNavDrawerPressed}>
                        <View style={{ zIndex: 1000, height: 50, width: 60, marginLeft: -10, paddingLeft: 10, alignItems : 'center', justifyContent : 'center', paddingRight: 10 }} onPress={this.onNavDrawerPressed}>
                            <View style={[{ flex: 1, alignItems : 'center', justifyContent : 'center' }]} onPress={this.onNavDrawerPressed}>
                                <NavIcon style={navIconStyle} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Moksa style={moksaStyle} />
                
                    <View style={[sectionStyle, sectionProfileStyle]}>
                        {authenticated && (isMemberhood || isAdvocator) &&
                        <TouchableOpacity style={[profileImageContainer, profileImage]} onPress={this.toggleProfileModal}>
                            <MutedCachedImage style={profileImage} source={imageSource} />
                        </TouchableOpacity>
                        }
                    </View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor : Colors.LIGHT_GREY,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingTop : 5,
        paddingLeft : isIphoneXorAbove() ? 10 : 0,
        paddingRight : isIphoneXorAbove() ? 10 : 0
    },
    sectionStyle : {
        flexDirection : 'row',
        alignItems : 'center',
        height : '100%',
        flex : 1,
    },
    sectionProfileStyle : {
        justifyContent : 'flex-end',
    },
    navIconStyle : {
        height : 10,
        width : 20,
    },
    moksaStyle : {
        marginTop : isIphoneXorAbove() ? 40 : 0,
        height : '35%',
        width : '50%',
    },
    inboxStyle : {
        height : 50,
        width : 20,
    },
    profileImageContainer : {
        marginLeft : 10,
        marginRight : 10,
    },
    profileImage : {
        height: 35,
        width: 35,
        borderRadius: 17.50,
    }
  });

const mapStateToProps = ({ authentication, main }) => {
    const { user, authenticated } = authentication
    const { unread, photo, permissions : userPermissions  } = user || { }
    const permissions = userPermissions || []
    const isMemberhood = permissions.includes('is_memberhood')
    const isAdvocator = permissions.includes('is_advocator') || permissions.includes('is_aviator')
    
    const { showProfile } = main

    return { unread, showProfile, photo, authenticated, isMemberhood, isAdvocator }
}


export default connect(mapStateToProps, { mainDrawer, showProfileModal })(NavBar)
