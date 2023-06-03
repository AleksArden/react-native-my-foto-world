import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CommentItem = ({ commentItem, index }) => {
  const { comment, userLogin, time } = commentItem;

  console.log(time);

  return (
    <View
      style={[
        styles.commentContainer,
        {
          flexDirection: index === 0 || index % 2 === 0 ? 'row' : 'row-reverse',
        },
      ]}
    >
      <Text style={styles.user}>{userLogin}</Text>

      <View
        style={[
          styles.textContainer,
          { marginLeft: index === 0 || index % 2 === 0 ? 16 : 0 },
          { marginRight: index === 0 || index % 2 === 0 ? 0 : 16 },
        ]}
      >
        <Text style={styles.text}>{comment}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
};
export default CommentItem;

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 24,

    gap: 16,
  },
  user: {},
  textContainer: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    flexGrow: 1,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    gap: 16,
  },
  text: {
    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 18,
    color: '#212121,',
  },
});
