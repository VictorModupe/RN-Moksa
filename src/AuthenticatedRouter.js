import React, { Component} from 'react'; //since we are using a class functional component
import { Router, Scene, Stack, Drawer } from 'react-native-router-flux'; //These are components that were imported from the library
import { connect } from 'react-redux'; //the connect function is for connecting a component to the store instance
import MainView from './components/MainView';
import NavBar from './components/common/NavBar';
import LeftDrawer from './components/LeftDrawer';
import { restoreSettings } from './actions/settings';
import { drawerOpenStatus } from './actions/main';

class AuthenticatedRouter extends Component {

    componentDidMount() {
        this.props.restoreSettings()
    } 

    render() {

        const state = this.props.navigationState || { };
        
        return (
            <Router>
                <Stack>
                    <Drawer
                        hideNavBar
                        key="drawerMenu"
                        contentComponent={LeftDrawer}
                        drawerWidth={325}        
                        onEnter={()=> this.props.drawerOpenStatus(true) }
                        onExit={()=> this.props.drawerOpenStatus(false) }
                        drawerPosition="left">
                        <Scene
                            key="mainView"
                            component={MainView}
                            navBar={NavBar}
                            initial
                        />
                    </Drawer>
                </Stack>
            </Router>
        )
    }
}

export default connect(null, {  restoreSettings, drawerOpenStatus }) (AuthenticatedRouter)