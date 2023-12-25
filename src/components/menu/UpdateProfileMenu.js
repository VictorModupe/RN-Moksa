
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView, Keyboard, BackHandler } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast'

import Colors from '../common/Colors';
import IconButton from '../common/IconButton';
import { BackArrow } from '../icons'
import { mainDrawer, switchToDrawer } from '../../actions/main';
import ErrorModal from '../modal/ErrorModal';
import TextInputWrapper from '../common/TextInput';
import SubmitButton from '../common/SubmitButton';
import { setError } from '../../actions/errors';
import { updateUser } from '../../actions/authentication';
import { isIphoneXorAbove } from '../../utils/utils';

class UpdateProfileMenu extends Component {
    constructor(props) {
        super(props);
        
        const { user } = props
        const { fullname, email, address, address1, city , state, zip } = user
        
        this.state = {
            fullname,
            email,
            address,
            address1,
            city,
            state,
            zip,
            keyboardShown : false,
        }
    };

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this._keyboardDidHide.bind(this));

        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.onClose()
            return true;
        });
    }
    
    componentWillUnmount() {
        this.backHandler.remove();
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow () {
        this.setState({ keyboardShown : true })
    }

    _keyboardDidHide () {
        if(this.scrollView) {
            this.scrollView.scrollTo({ x : 0, y : 0, animated : true})
        }
        this.setState({ keyboardShown : false })
    }

    onClose = () => {
        this.props.switchToDrawer('settings')
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

    onSubmitUpdate = () => {
        this.props.updateUser(this.state, this.refs.toast)
    }

    setNextInput = (nextInput) => {
        if(nextInput) {
          nextInput.focus();
        }
    }

    render() {
        const { error, loading } = this.props
        const { fullname, email, address, address1, city, state, zip, focusedInput } = this.state
        const { closeStyle, closeContainerStyle, updateTextStyle, inputStyle, inputTitleStyle } = styles
        
        let keyboardVerticalOffset = 0
        if(focusedInput == 'city' || focusedInput == 'state') {
            keyboardVerticalOffset = 130
        } else if(focusedInput == 'zip') {
            keyboardVerticalOffset = 150
        }

        return (
            <View style={styles.containerStyle}>
                <ErrorModal isModalVisible={error ? true : false} onDismissed={() => this.props.setError() } message={error} />
                <TouchableOpacity style={closeContainerStyle} onPress={this.onClose}>
                    <IconButton style={closeStyle} icon={BackArrow} />
                    {!isIphoneXorAbove() && <Text style={{ marginLeft : 25, fontSize : 17, fontFamily : 'TradeGothicLT-Light' }}>Settings</Text> }
                </TouchableOpacity>

                <View style={{ paddingRight : 10, flex : 1 }}>
                    <Text style={updateTextStyle}>Update Profile</Text>
                    <KeyboardAwareScrollView
                        innerRef={ref => {
                            this.scrollView = ref
                        }}
                        enableResetScrollToCoords={false}
                        extraHeight={keyboardVerticalOffset}
                        keyboardOpeningTime={0}
                        behavior='padding' keyboardShouldPersistTaps='handled' keyboardDismissMode='interactive'>
                    <View style={{ flex : 1, paddingLeft : 10 }}>
                        <Text style={inputTitleStyle}>Full Name</Text>
                        <TextInputWrapper 
                            style={inputStyle}
                            ref={(input) => { this.fullnameInput = input; }}
                            onChangeText={ (value) => this.setState({ fullname : value }) }
                            onSubmitEditing={ () => this.setNextInput(this.emailInput) }
                            returnKeyType={'next'}
                            autoFocus={false}
                            blurOnSubmit={false}
                            value={fullname}
                            onFocus={() => this.setState({ focusedInput : 'fullname' })}
                         />

                        <Text style={inputTitleStyle}>Email Address</Text>
                        <TextInputWrapper 
                            style={inputStyle}
                            ref={(input) => { this.emailInput = input; }}
                            onChangeText={ (value) => this.setState({ email : value }) }
                            onSubmitEditing={ () => this.setNextInput(this.addressInput) }
                            returnKeyType={'next'}
                            autoFocus={false}
                            blurOnSubmit={false}
                            value={email}
                            onFocus={() => this.setState({ focusedInput : 'email' })}
                         />


                        <Text style={inputTitleStyle}>Address</Text>
                        <TextInputWrapper 
                            style={inputStyle}
                            ref={(input) => { this.addressInput = input; }}
                            onChangeText={ (value) => this.setState({ address : value }) }
                            onSubmitEditing={ () => this.setNextInput(this.address1Input) }
                            returnKeyType={'next'}
                            autoFocus={false}
                            blurOnSubmit={false}
                            value={address}
                            onFocus={() => this.setState({ focusedInput : 'address' })}
                         />


                        <Text style={inputTitleStyle}>Address Line 2</Text>
                        <TextInputWrapper 
                            style={inputStyle}
                            ref={(input) => { this.address1Input = input; }}
                            onChangeText={ (value) => this.setState({ address1 : value }) }
                            onSubmitEditing={ () => this.setNextInput(this.cityInput) }
                            returnKeyType={'next'}
                            autoFocus={false}
                            blurOnSubmit={false}
                            value={address1}
                            onFocus={() => this.setState({ focusedInput : 'address1' })}
                         />


                         <Text style={inputTitleStyle}>City</Text>
                         <TextInputWrapper 
                             style={inputStyle}
                             ref={(input) => { this.cityInput = input; }}
                             onChangeText={ (value) => this.setState({ city : value }) }
                             onSubmitEditing={ () => this.setNextInput(this.stateInput) }
                             returnKeyType={'next'}
                             autoFocus={false}
                             blurOnSubmit={false}
                             value={city}
                             onFocus={() => this.setState({ focusedInput : 'city' })}
                          />
                        

                        <Text style={inputTitleStyle}>State</Text>
                        <TextInputWrapper 
                            style={inputStyle}
                            ref={(input) => { this.stateInput = input; }}
                            onSubmitEditing={ () => this.setNextInput(this.zipInput) }
                            onChangeText={ (value) => this.setState({ state : value ? value.toUpperCase() : '' }) }
                            returnKeyType={'next'}
                            autoFocus={false}
                            blurOnSubmit={false}
                            value={state}
                            maxLength={2}
                            onFocus={() => this.setState({ focusedInput : 'state' })}
                         />


                         <Text style={inputTitleStyle}>Zip Code</Text>
                         <TextInputWrapper 
                             style={inputStyle}
                             ref={(input) => { this.zipInput = input; }}
                             onChangeText={ (value) => this.setState({ zip : value }) }
                             onSubmitEditing={this.onSubmitUpdate}
                             autoFocus={false}
                             blurOnSubmit={true}
                             value={zip}
                             onFocus={() => this.setState({ focusedInput : 'zip' })}
                          />
                         <View style={{ flex : 1, marginTop : 15, alignItems : 'flex-end' }}>
                            <SubmitButton onSubmitPressed={this.onSubmitUpdate} loading={loading} />
                        </View>
                    </View>
                    </KeyboardAwareScrollView>
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

const mapStateToProps = ({  authentication, main }) => {
    const { user } = authentication
    const { loading } = main
    
    return { user, loading } 
}
export default connect(mapStateToProps, { mainDrawer, switchToDrawer, setError, updateUser })(UpdateProfileMenu)