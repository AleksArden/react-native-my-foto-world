import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CommentItem = ({ commentItem }) => {
  const { comment, userLogin } = commentItem;
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.user}>{userLogin}</Text>

      <View style={styles.textContainer}>
        <Text style={styles.text}>{comment}</Text>
      </View>
    </View>
  );
};
export default CommentItem;

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 24,
    flex: 1,
    flexDirection: 'row',
  },
  user: {},
  textContainer: {
    marginLeft: 16,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    flexGrow: 1,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  text: {
    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 18,
    color: '#212121,',
  },
});
