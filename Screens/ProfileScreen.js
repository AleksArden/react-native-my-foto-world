import React from 'react';
import { View } from 'react-native';

import ImageBackgroundComponent from '../Components/ImageBackground';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackgroundComponent />
    </View>
  );
};
export default ProfileScreen;
