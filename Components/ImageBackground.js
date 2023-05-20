import { React } from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

import Image from '../assets/images/Photo-BG.jpg';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const ImageBackgroundComponent = ({ children }) => {
  return (
    <ImageBackground source={Image} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};
export default ImageBackgroundComponent;
const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight,
  },
});
