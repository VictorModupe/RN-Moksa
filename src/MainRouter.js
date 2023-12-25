import React, { Component} from 'react'
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginView from './components/LoginView';
import LeftDrawer from './components/LeftDrawer';
import MainView from './components/MainView';
import NavBar from './components/common/NavBar';
import { restoreSettings } from './actions/settings';
import { drawerOpenStatus } from './actions/main';
import { NavIcon } from './components/icons';


class MainRouter extends Component {

    componentDidMount() {
        this.props.restoreSettings()
    }

    render() {

        const state = this.props.navigationState || { };
        
        return (
			<Router sceneStyle={{flex : 1}} panHandlers={null}>
                <Scene key="root">
                    <Scene
                        key="login"
                        component={LoginView}
                        initial
                        hideNavBar
                    />

                <Stack 
                        key="authenticatedScreen"
                        hideNavBar>
                    <Drawer
                        key="drawerMenu"
                        contentComponent={LeftDrawer}
                        drawerWidth={325}
                        hideDrawerButton={false}
                        onEnter={()=> this.props.drawerOpenStatus(true) }
                        onExit={()=> this.props.drawerOpenStatus(false) }
                        drawerLockMode={'locked-closed'}
                        drawerPosition="left">
                        <Scene
                            key="mainView"
                            component={MainView}
                            drawerIcon={() => <NavIcon style={{ height : 10, width : 50 }} />}
                            navBar={NavBar}
                            initial
                        />
                    </Drawer>
                </Stack>

                </Scene>
            </Router>
        )
    }
}

export default connect(null, {  restoreSettings, drawerOpenStatus }) (MainRouter)