import { Dimensions, Platform } from 'react-native';

export const isIphoneXorAbove = () => {
    const dimen = Dimensions.get('window');
    return (
      Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      ((dimen.height === 812 || dimen.width === 812) || (dimen.height === 896 || dimen.width === 896))
    );
  }

  export const htmlDecode = (str) => {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    })
  }

  export const sleep = async(duration) => {
    return new Promise(async(resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, duration)
     })
}