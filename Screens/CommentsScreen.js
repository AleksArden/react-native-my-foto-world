import React from 'react';
import { View, StyleSheet } from 'react-native';

const CommentsScreen = ({ route }) => {
  return <View style={styles.container}></View>;
};
export default CommentsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
  },
});
