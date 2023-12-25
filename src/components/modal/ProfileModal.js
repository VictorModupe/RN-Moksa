import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux'
import Orientation from 'react-native-orientation'
import Modal from 'react-native-modal';
import Colors from '../common/Colors';
import env from '../../../env'
import MutedCachedImage from '../common/MutedCachedImage';
import { Advocator } from '../icons/Advocator'

const BARCODE_FONT = Platform.OS == 'ios' ?  'Bar-Code 39' : 'barcode39'
const { height, width } = Dimensions.get('window');
  
class ProfileModal extends Component {
  state = { 
    smallTriangle : {
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
     },
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.orientation != this.props.orientation) {
        //LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
}

  componentDidMount() {
    //Orientation.unlockAllOrientations();
  }

  componentWillUnmount() {
    //Orientation.lockToPortrait();
  }

  onSubmitPressed = () => {
    const { onDismissed, onSubmit } = this.props
    const { email, password } = this.state

    onDismissed()
    onSubmit(email, password)
  }

  onProfileLayout = (event) => {
    const {width, height} = event.nativeEvent.layout;
    const smallTriangleHeight = height/7

    this.setState({
      width, 
      height,
      smallTriangle : {
        width,
        borderLeftWidth: width,
        borderRightWidth: width ,
        borderBottomWidth:  smallTriangleHeight,
        height : width,
        top : height - width,
      },
      cornerTrangle : {
        borderTopWidth : height/2,
        borderLeftWidth: width / 2,
        borderRightWidth:width / 2,
        borderBottomWidth: height / 2,
      }
    })
}

  render() {
    const { isModalVisible, onDismissed, orientation, user, isAdvocator } = this.props
    const { fullname, first_name, last_name, external_id, title, photo } = user
    const { modalStyle, containerStyle, modalThumbStyle, modalThumbContainer, subcontainerStyle, logoStyle, profileImageContainer, profileImageStyle, 
            logoContainerStyle, memberInfoContainer, memberHoodImageStyle, memberDetailStyle, memberNameStyle, memberSubdetailStyle, portraitBarcodeStyle, landscapeBarcodeStyle } = styles
    const isLandscape = orientation === 'LANDSCAPE' || orientation == 'LANDSCAPE-LEFT'|| orientation == 'LANDSCAPE-RIGHT'
    const rotation = orientation == 'LANDSCAPE-LEFT' ? '90deg' : '-90deg';

    const imageSource = photo ? { uri : `${env.API_BASE_URL}${photo.url}` } : require('../../assets/placeholder_profile.jpg')

    let cleanedExternal_id = external_id ? external_id.replace('*', '').replace('*', '') : 'XXXXXXXXXXXXX';

    return (
      <Modal style={modalStyle} isVisible={isModalVisible} onSwipe={onDismissed} swipeDirection={'down'} backdropOpacity={.15} onBackButtonPress={onDismissed}>
        <SafeAreaView style={{ flex: 1}}>
        <View style={modalThumbContainer}>
          <View style={modalThumbStyle} />
        </View>
          <View style={containerStyle}>
          { !isLandscape && 
              <View style={subcontainerStyle}>
                <View style={profileImageContainer} onLayout={this.onProfileLayout} >
                  <MutedCachedImage style={profileImageStyle} source={imageSource} />

                  <View style={[styles.cornerTrangleStyle, this.state.cornerTrangle ]} />
                  <View style={[styles.smallTrangleStyle, this.state.smallTriangle ]} />
                </View>

                <View style={logoContainerStyle}>
                  {!isAdvocator && <Image style={logoStyle} resizeMode={'contain'} source={require('../../assets/logo_black.png')} /> }
                  {isAdvocator && <Advocator style={logoStyle} /> }
                </View>

                <View style={memberInfoContainer}>
                  <Image style={memberHoodImageStyle} resizeMode={'contain'} source={require('../../assets/memberhood.png')} />
                  <View style={memberDetailStyle}>
                    <Text style={memberNameStyle}>{ fullname || `${first_name} ${last_name}` }</Text>
                    <Text style={memberSubdetailStyle}>{title || `MEMBER`}</Text>
                  </View>
                </View>
              </View>
          }


          { !isLandscape && <Text style={[portraitBarcodeStyle, { fontFamily : BARCODE_FONT }]}>*{cleanedExternal_id}*</Text> }
          { !isLandscape && <Text style={[portraitBarcodeStyle, { fontSize : 24 }]}>{cleanedExternal_id}</Text> }

          { isLandscape && 
              <View style={{ flex : 1, alignItems : 'center', justifyContent : 'center', overflow : 'visible', transform: [{ rotate: rotation}] }}>
                <Text style={[landscapeBarcodeStyle, { fontFamily : BARCODE_FONT }]}>*{cleanedExternal_id}*</Text>
                <Text style={[landscapeBarcodeStyle]}>{cleanedExternal_id}</Text>
              </View>
          }
        </View>
        </SafeAreaView>
      </Modal>
    );
  }
}


const styles = StyleSheet.create({
  modalStyle: { 
    flex : 1, 
    marginBottom : 0, 
    marginLeft : 10,
    marginRight : 10,
  },
  modalThumbContainer : { 
    width : '100%', 
    alignItems: 'center',
    marginBottom : 15 
  },
  modalThumbStyle : { 
    height : 5,
    width : 50,
    borderRadius : 25,
    backgroundColor : Colors.WHITE,
    opacity : .5 
  },
  containerStyle: {
    flex: 1, 
    backgroundColor : Colors.WHITE, 
    borderTopStartRadius : 25,
    borderTopEndRadius : 25,
    marginBottom : -30, 
    height : '110%',
    paddingTop : 20,
    paddingBottom : 40,
    paddingLeft : 20,
    paddingRight : 20,
    alignItems: 'center',
  },
  subcontainerStyle: {
    flex: 1,
    width : '100%',
    height : '50%',
    alignItems: 'center',
  },
  logoStyle : {
    width: 75, 
    height: 75,
  },
  smallTrangleStyle: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#985B5BB3',
    position : 'absolute',
    overflow: 'visible',
  },
  profileImageContainer : {
    width : width * .85,
    height : height * .55,
    borderTopStartRadius : 25,
    borderTopEndRadius : 25,
    marginTop : 65,
    overflow: "hidden"
  },
  cornerTrangleStyle: {
    top : 0,
    height : 0,
    width : 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopColor : 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: '#6C242466',
    borderBottomColor: '#6C242466',
    position : 'absolute',
  },
  profileImageStyle : {
    width : '100%',
    height : '100%',
  },
  logoContainerStyle : {
    position: 'absolute',
    paddingLeft : 25,
    paddingRight : 25,
    paddingBottom : 25,
    backgroundColor : Colors.WHITE,
    borderRadius : 65,
    borderTopStartRadius : 0,
    borderTopEndRadius : 0
  },
  memberInfoContainer : {
    width : '100%', 
    flexDirection : "row", 
    justifyContent : 'space-between', 
    alignItems : 'center', 
    marginTop : 10,
    marginBottom : 10,
  },
  memberHoodImageStyle : {
    height : 50,
    width : 50
  },
  memberDetailStyle : {
    alignItems : 'flex-end'
  },
  memberNameStyle : {
    fontSize : 20, 
    marginBottom : 5,
    fontFamily : 'TradeGothicLT-Light'
  },
  memberSubdetailStyle : {
    fontSize : 12,
    fontFamily : 'TrendSansOne',
    color: Colors.RED
  },
  portraitBarcodeStyle : {
    fontSize : 28,
    color : 'black',
    marginBottom : 5,
    fontFamily : 'TradeGothicLT-Light',
  },
  landscapeBarcodeStyle : {
    fontSize : 55,
    color : 'black',
    width : '200%',
    fontFamily : 'TradeGothicLT-Light',
  }
});


const mapStateToProps = ({ main, authentication }) => {
  const { orientation } = main
  const { user } = authentication
  const { permissions : userPermissions } = user || { }
  const permissions = userPermissions || []
  const isAdvocator = permissions.includes('is_advocator') 

  return { orientation, user, isAdvocator }
}

export default connect(mapStateToProps)(ProfileModal)