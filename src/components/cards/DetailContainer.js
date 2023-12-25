import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, TouchableOpacity, Text, Easing, Animated, Dimensions, Image, Platform, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DetailHeader from './DetailHeader';
import MutedCachedImage from '../common/MutedCachedImage';
import Colors from '../common/Colors';
import { ViewPager } from 'rn-viewpager'
import ImageZoom from 'react-native-image-pan-zoom';
import ModalFlatList from '../common/ModalFlatList';

export default class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScreenImage : false,
            fullScreenImageTop : false,
            imageSlideIndex: 0,
            imagesWithSizes: [],
            loadingImagesSizes: true,
        }
        this._fullOpacity = new Animated.Value(0)

        this.loadImageSizes()
    }

    loadImageSizes = async() => {
        const { images } = this.props
        const imagePromises = images.map((image) => {
            return new Promise((resolve, reject) => {
                const { uri } = image
                if(!uri) {
                    resolve({ source: image, width: '100%', width: '100%' })
                    return
                }
                
                resolve({ source: { uri }, width: '100%', width: '100%' })
                return
                Image.getSize(uri, (width, height) => {
                    resolve({ source: { uri }, width, height})
                });
            })
        });
        
        const imageResults = await Promise.all(imagePromises)
        this.setState({ imagesWithSizes: [...imageResults], loadingImagesSizes: false })

    }
    
    toggleFullScreenImage = () => {
        const { fullScreenImage } = this.state
        
        this.setState({ fullScreenImage : !fullScreenImage })
        this.setState({ fullScreenImageTop : true })
        //this.props.onDisableSwipe(!fullScreenImage ? true : false)

        Animated.timing(this._fullOpacity, {
            toValue: fullScreenImage ? 0.0 : 1.0,
            duration : 250,
            easing : Easing.inOut(Easing.ease)
          }).start(() => {
            this.setState({ fullScreenImageTop : !fullScreenImage ? true : false })
          })
        
    }
    
    renderImageSlides2 = () => {
        const { imageStyle, imageSlideContainer, imageStyleFull } = styles
        const { fullScreenImage, imagesWithSizes, loadingImagesSizes } = this.state
        if(loadingImagesSizes) {
            return <View />
        }

        return imagesWithSizes.map(({ source, width, height}) => {
            return (
                <View>
                    <TouchableWithoutFeedback onPress={this.toggleFullScreenImage} disabled={!fullScreenImage}>
                        <Image style={imageStyleFull} source={source} resizeMode={'contain'} />
                    </TouchableWithoutFeedback>
                </View>
            )
        })
    }

    renderImageSlides = () => {
        const { imageStyle, imageSlideContainer, imageStyleFull } = styles
        const { fullScreenImage, imagesWithSizes, loadingImagesSizes } = this.state
        if(loadingImagesSizes) {
            return <View />
        }

        return imagesWithSizes.map(({ source, width, height}) => {
            return (
                <View style={imageSlideContainer} key={source}>
                        <ImageZoom 
                                centerOn={{scale: 2.5, x: 0, y: 0}}
                                panToMove={false}
                                cropWidth={Dimensions.get('window').width - 20}
                                cropHeight={Dimensions.get('window').height}
                                imageWidth={Dimensions.get('window').width}
                                imageHeight={Dimensions.get('window').height}
                                onClick={this.toggleFullScreenImage}>
                                    <MutedCachedImage style={imageStyleFull} source={source} resizeMode={'contain'} />
                        </ImageZoom>
                </View>
            )
        })
    }

    renderChildren = ({ item, index }) => {
        
        return <TouchableWithoutFeedback style={{ flex: 1 }} onPressIn={() => this.props.onDisableSwipe(true)} onPressOut={() => this.props.onDisableSwipe(false)} >{item}</TouchableWithoutFeedback>
    }

    render() {
        const { container, detailsContainerStyle, titleStyle, imageContainerStyle, imageContainerFull, imageStyle, scrollContainer, pagerContainerStyle } = styles
        const { backTitle, itemTitle, images, children, onClose, aboveTitleView : AboveTitleView, hideClose, hideDetailTitle, showCenterTitle } = this.props
        const { fullScreenImageTop, fullScreenImage, imageSlideIndex, imagesWithSizes } = this.state

        const hasLess = imageSlideIndex > 0
        const hasMore = imageSlideIndex < (imagesWithSizes.length) - 1

        const hasMoreAndroidStyle = Platform.OS == 'android' ? { height: '100%', paddingTop: '75%', paddingLeft: 20, paddingRight: 5 } : { top: '50%', paddingLeft: 20, paddingRight: 5 }
        const hasLessAndroidStyle = Platform.OS == 'android' ? { height: '100%', paddingTop: '75%', paddingLeft: 5, paddingRight: 20 } : { top: '50%', paddingLeft: 5, paddingRight: 20 }
        
        //If viewpager failing check rn-viewpager renderIOS method, look for children override and contentOffset
        return (
            <View style={[container]}>
                <DetailHeader title={backTitle} onClose={onClose} hideClose={hideClose} showCenterTitle={showCenterTitle} />
                    <Animated.View style={[imageContainerStyle, imageContainerFull, { position : 'absolute', zIndex : fullScreenImageTop ? 10 : -10, opacity : this._fullOpacity }]} onPress={this.toggleFullScreenImage}>
                            <TouchableWithoutFeedback disabled={!fullScreenImage} style={{width: 30}}  onPressIn={() =>  this.props.onDisableSwipe(true)} onPressOut={()=> this.props.onDisableSwipe(false)}>
                                <Icon style={[{ position: 'absolute', zIndex: 100 }, hasLessAndroidStyle]} />
                            </TouchableWithoutFeedback>
                            {hasLess &&
                                <TouchableWithoutFeedback onPress={() => this.viewPager.setPage(imageSlideIndex - 1)} disabled={!fullScreenImage} style={{width: 30}}>
                                    <Icon name={'chevron-left'} color={'black'} size={25} style={[{ position: 'absolute', zIndex: 100 }, hasLessAndroidStyle]} />
                                </TouchableWithoutFeedback>
                            }
                        <ViewPager ref={(view) => { this.viewPager = view }} scrollEnabled={fullScreenImage} style={pagerContainerStyle} onPageSelected={({ position }) => this.setState({ imageSlideIndex: position })} >
                            {this.renderImageSlides()}
                        </ViewPager>
                        <TouchableWithoutFeedback disabled={!fullScreenImage} onPressIn={() =>  this.props.onDisableSwipe(true)} onPressOut={()=> this.props.onDisableSwipe(false)}>
                                <Icon style={[{ position: 'absolute', zIndex: 100, right: 0, }, hasMoreAndroidStyle]} />
                        </TouchableWithoutFeedback>
                        {hasMore && 
                            <TouchableWithoutFeedback onPress={() => this.viewPager.setPage(imageSlideIndex + 1, false)} disabled={!fullScreenImage} onPressIn={() =>  this.props.onDisableSwipe(true)} onPressOut={()=> this.props.onDisableSwipe(false)}>
                                <Icon name={'chevron-right'} color={'black'} size={25} style={[{ position: 'absolute', zIndex: 100, right: 0, }, hasMoreAndroidStyle]} />
                            </TouchableWithoutFeedback>
                        }
                    </Animated.View>
                <View style={[detailsContainerStyle, { paddingLeft : 15, paddingRight : 15, paddingTop : 5, paddingBottom : 10 } ]}>
                    {AboveTitleView && <AboveTitleView />}
                    {!hideDetailTitle && <Text style={titleStyle} ellipsizeMode='tail'>{itemTitle ? itemTitle.toUpperCase() : ''}</Text>}
                    <TouchableOpacity style={[imageContainerStyle]} onPress={this.toggleFullScreenImage} activeOpacity={.9}>
                            <MutedCachedImage style={imageStyle} source={images[0]} />
                    </TouchableOpacity>

                    <ModalFlatList
                        style={scrollContainer}
                        data={children}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={this.renderChildren}
                        onDisableSwipe={this.props.onDisableSwipe}
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
    },
    detailsContainerStyle : {
        margin : 5,
        flex : 1,
    },
    titleStyle : {
        margin : 15,
        fontFamily : 'TrendSansOne',
        fontSize : 14,
        textAlign : 'center',
    },
    imageContainerStyle : {
        width : '100%', 
        height : '35%',
        overflow : 'hidden'
    },
    imageContainerFull : {
        width : '100%',
        height : '100%',
        overflow : 'hidden'
    },
    imageSlideContainer : {
        width : '100%',
        height : '100%',
    },
    imageStyle : {
      width : '100%',
      height : '100%',
      borderRadius : 25,
      overflow :'hidden'
    },
    imageStyleFull : {
      width : '100%',
      height : '100%',
    },
    scrollContainer : {
        flex: 1,
    },
    pagerContainerStyle: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'black',
        borderRadius : 25,
    },
    hasMoreIcon: {

    },
    hasLessIcon: {
        
    }
}