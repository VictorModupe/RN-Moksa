import React from 'react'
import { Platform, Image } from 'react-native'
import { CachedImage } from 'react-native-cached-image';
import { ColorMatrix, concatColorMatrices, saturate, brightness } from 'react-native-color-matrix-image-filters';

const majorVersionIOS = parseInt(Platform.Version, 10);

const MutedCachedImage = (props) => {
  const ImageView = majorVersionIOS <= 10 ? Image : CachedImage

  return ( <ImageView {...props} /> )
}

export default MutedCachedImage