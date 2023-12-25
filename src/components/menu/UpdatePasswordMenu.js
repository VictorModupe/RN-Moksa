
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, BackHandler } from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

import Colors from '../common/Colors';
import IconButton from '../common/IconButton';
import { BackArrow } from '../icons'
import { mainDrawer, switchToDrawer } from '../../actions/main';
import TextInputWrapper from '../common/TextInput';
import ErrorModal from '../modal/ErrorModal';
import SubmitButton from '../common/SubmitButton';
import { updatePassword } from '../../actions/authentication';
import { setError } from '../../actions/errors';
import { isIphoneXorAbove } from '../../utils/utils';

class UpdatePasswordMenu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            current : '',
            password : '',
            confirm : '',
        }
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
        this.props.switchToDrawer('settings')
    }

    onSubmitUpdate = () => {
        const { password, confirm } = this.state

        this.props.updatePassword(password, confirm, this.refs.toast)
    }

    setNextInput = (nextInput) => {
        if(nextInput) {
          nextInput.focus();
        }
    }
    

    render() {
        const { current, password, confirm } = this.state
        const { loading, error } = this.props
        const { closeStyle, closeContainerStyle, updateTextStyle, inputStyle, inputTitleStyle } = styles

        return (
            <View style={styles.containerStyle}>
                <ErrorModal isModalVisible={error ? true : false} onDismissed={() => this.props.setError() } message={error} />
                <TouchableOpacity style={closeContainerStyle} onPress={this.onClose}>
                    <IconButton style={closeStyle} icon={BackArrow} />
                    {!isIphoneXorAbove() && <Text style={{ marginLeft : 25, fontSize : 17, fontFamily : 'TradeGothicLT-Light' }}>Settings</Text> }
                </TouchableOpacity>

                <View style={{ paddingRight : 10 }}>
                    <Text style={updateTextStyle}>Update Password</Text>
                    <ScrollView style={{ paddingLeft : 10}} keyboardShouldPersistTaps='handled' keyboardDismissMode='interactive'>
                        <Text style={inputTitleStyle}>New Password</Text>
                        <TextInputWrapper 
                            style={inputStyle}
                            ref={(input) => { this.passwordInput = input; }}
                            onChangeText={ (value) => this.setState({ password : value }) }
                            onSubmitEditing={ () => this.setNextInput(this.confirmPasswordInput) }
                            returnKeyType={'next'}
                            autoFocus={false}
                            blurOnSubmit={false}
                            value={password}
                            secureTextEntry
                         />


                        <Text style={inputTitleStyle}>Confirm Password</Text>
                        <TextInputWrapper 
                            style={inputStyle}
                            ref={(input) => { this.confirmPasswordInput = input; }}
                            onChangeText={ (value) => this.setState({ confirm : value }) }
                            onSubmitEditing={this.onSubmitUpdate}
                            returnKeyType={'done'}
                            autoFocus={false}
                            blurOnSubmit={true}
                            value={confirm}
                            secureTextEntry
                         />
                         <View style={{ flex : 1, marginTop : 15, alignItems : 'flex-end' }}>
                            <SubmitButton onSubmitPressed={this.onSubmitUpdate} loading={loading} />
                        </View>
                    </ScrollView>
                </View>
                <Toast ref="toast"/>
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
        marginTop : 15,
        marginBottom : 15,
        fontFamily : 'TradeGothicLT-Bold'
    },
    inputStyle : { 
        backgroundColor : Colors.LIGHT_GREY,
        padding : 20,
        textAlign : 'left',
        marginTop : 10,
        marginBottom : 10,
        paddingLeft : 10,
        paddingRight : 10,
        fontFamily : 'TradeGothicLT-Light'
    },
    inputTitleStyle : {
        fontFamily : 'TradeGothicLT-Light'
    }
})

const mapStateToProps = ({ main }) => {
    const { loading, error } = main
    
    return { loading, error } 
}
export default connect(mapStateToProps, { mainDrawer, updatePassword, switchToDrawer, setError })(UpdatePasswordMenu)