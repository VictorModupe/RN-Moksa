
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { StyleSheet, LayoutAnimation, View} from 'react-native'
import Colors from './common/Colors'
import SettingsMenu from './menu/SettingsMenu'
import NavMenu from './menu/NavMenu'
import UpdateProfileMenu from './menu/UpdateProfileMenu';
import UpdateAvatarMenu from './menu/UpdateAvatarMenu';
import UpdatePasswordMenu from './menu/UpdatePasswordMenu';

class LeftDrawer extends Component {
    constructor(props) {
        super(props)

    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.drawerOpen != this.props.drawerOpen) {
            const animation = {...LayoutAnimation.Presets.easeInEaseOut, duration : 350 }

            LayoutAnimation.configureNext(animation);
        }
    }
    render() {
        const { drawerView, drawerOpen } = this.props
        const { modalThumbContainer, modalThumbStyle } = styles

        return (
            <View style={styles.drawerContainerStyle}>
                { drawerView == 'main' && <NavMenu /> }
                { drawerView == 'settings' && <SettingsMenu /> }
                { drawerView == 'update_profile' && <UpdateProfileMenu /> }
                { drawerView == 'update_password' && <UpdatePasswordMenu /> }
                { drawerView == 'update_avatar' && <UpdateAvatarMenu /> }

                <View style={modalThumbContainer}>
                    { drawerOpen && <View style={modalThumbStyle} /> }
                </View>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainerStyle: { 
      flex : 1, 
      flexDirection : 'row',
    },
    modalThumbContainer : { 
      width : 5,
      alignItems: 'center',
      justifyContent : 'center',
      left : 25,
      paddingBottom : 10
    },
    modalThumbStyle : { 
      height : 50,
      width : 5,
      borderRadius : 25,
      backgroundColor : Colors.WHITE,
      opacity : .5 
    },
})

const mapStateToProps = ({ main }) => {
    const { drawerView, drawerOpen } = main

    return { drawerView, drawerOpen }
}

export default connect(mapStateToProps)(LeftDrawer)