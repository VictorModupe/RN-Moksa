
import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, Text, Image, ActivityIndicator, BackHandler } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Toast, {DURATION} from 'react-native-easy-toast'

import Colors from '../common/Colors';
import IconButton from '../common/IconButton';
import { BackArrow, Carrot } from '../icons'
import { mainDrawer, switchToDrawer } from '../../actions/main';
import SubmitButton from '../common/SubmitButton';
import Button from '../common/Button';
import ErrorModal from '../modal/ErrorModal';
import { setError } from '../../actions/errors';
import { updateAvatar } from '../../actions/authentication';
import { isIphoneXorAbove } from '../../utils/utils';
import env from '../../../env';
import MutedCachedImage from '../common/MutedCachedImage';

class UpdateAvatarMenu extends Component {
    constructor(props) {
        super(props);

        const { photo } = props
        const imageSource = photo ? { uri : `${env.API_BASE_URL}${photo.url}` } : require('../../assets/placeholder_profile.jpg')

        this.state = {
            avatarSource : imageSource,
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

    onSubmitImage = () => {
        if(!this.state.imageInfo) {
            this.onClose()
            return
        }

        const { fileName : name, uri } = this.state.imageInfo

        this.props.updateAvatar(name, uri, this.refs.toast)
    }

    onChooseImage = () => {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            mediaType : 'photo',
            noData : true,
            maxWidth : 1024,
            maxHeight : 1024,
        }

        ImagePicker.showImagePicker(options, (response) => {
          
            if (response.didCancel) {
              //console.log('User cancelled image picker');
            } else if (response.error) {
              //console.log('ImagePicker Error: ', response.error);
            } else {
              const sourceUri = { uri: response.uri };
              this.setState({
                loading : true
              });

              // You can also display the image using data:
              //const source = { uri: 'data:image/jpeg;base64,' + response.data };
              //console.log('response', response)
              
              this.setState({
                avatarSource: sourceUri,
                imageInfo : response
              });
            }
        })

    }


    render() {
        const { loading, avatarSource } = this.state
        const { error, loading : updateLoading } = this.props
        const { containerStyle, closeStyle, closeContainerStyle, updateTextStyle, avatarContainerStyle, profileImageStyle, actionContainerStyle, confirmButtonStyle } = styles
        
        return (
            <View style={containerStyle}>
                <ErrorModal isModalVisible={error ? true : false} onDismissed={() => this.props.setError() } message={error} />
                <TouchableOpacity style={closeContainerStyle} onPress={this.onClose}>
                    <IconButton style={closeStyle} icon={BackArrow} />
                    {!isIphoneXorAbove() && <Text style={{ marginLeft : 25, fontSize : 17, fontFamily : 'TradeGothicLT-Light' }}>Settings</Text> }
                </TouchableOpacity>

                <View style={{ flex : 1 }}>
                    <Text style={updateTextStyle}>Update Avatar</Text>
                    <View style={[avatarContainerStyle, { alignItems : 'center' }]} >
                        <View style={profileImageStyle}>
                            <MutedCachedImage style={[profileImageStyle, { opacity : loading ? .25 : 1 }]} resizeMode={'contain'} source={avatarSource} onLoadEnd={ ()=>{ this.setState({ loading: false }) }} />
                            {loading && <ActivityIndicator size="small" color={Colors.LIGHT_GREY} style={{ position : 'absolute', top : '50%', left : '50%' }} /> }
                        </View>
                        <View style={actionContainerStyle}>
                            <SubmitButton style={{ marginLeft : 50 }} onSubmitPressed={this.onChooseImage} direction={'up'} disabled={updateLoading} />
                        </View>
                    </View>
                    <Button label={'Confirm'} style={confirmButtonStyle} onPress={this.onSubmitImage} loading={updateLoading} uppercase />
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
    avatarContainerStyle : { 
        height : '35%', 
        flexDirection : 'row', 
        alignItems : 'center', 
        justifyContent : 'flex-start',
    },
    profileImageStyle : { 
        flex : 1, 
        width : '100%',
        height : '100%',
        alignItems : 'flex-start', 
        justifyContent : 'flex-start' 
    },
    actionContainerStyle : { 
        flex : 1, 
        alignItems : 'center', 
        justifyContent : 'center' 
    },
    confirmButtonStyle : { 
      backgroundColor : '#8A4949',
      marginTop : 45,
      paddingLeft : 45, 
      paddingRight : 45 
    },
})

const mapStateToProps = ({ main, authentication }) => {
    const { error, loading } = main
    const { user } = authentication
    const { photo } = user

    return { error, loading, photo } 
}
export default connect(mapStateToProps, { mainDrawer, switchToDrawer, updateAvatar, setError })(UpdateAvatarMenu)