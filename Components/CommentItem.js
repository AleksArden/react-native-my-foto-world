import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Text, Image } from 'react-native';

const CommentItem = ({ commentItem, index }) => {
  const { comment, userLogin, time, date, userAvatar } = commentItem;

  return (
    <View
      style={[
        styles.commentContainer,
        {
          flexDirection: index === 0 || index % 2 === 0 ? 'row' : 'row-reverse',
        },
      ]}
    >
      {userAvatar ? (
        <Image style={styles.image} source={{ uri: userAvatar }} />
      ) : (
        <Text style={styles.user}>{userLogin}</Text>
      )}

      <View
        style={[
          styles.textContainer,
          { marginLeft: index === 0 || index % 2 === 0 ? 16 : 0 },
          { borderTopLeftRadius: index === 0 || index % 2 === 0 ? 0 : 6 },
          { marginRight: index === 0 || index % 2 === 0 ? 0 : 16 },
          { borderTopRightRadius: index === 0 || index % 2 === 0 ? 6 : 0 },
        ]}
      >
        <Text style={styles.text}>{comment}</Text>
        <Text style={styles.textDate}>
          {date} | {time}
        </Text>
      </View>
    </View>
  );
};
export default CommentItem;

const styles = StyleSheet.create({
  commentContainer: {
    marginBottom: 24,
  },
  image: {
    height: 28,
    width: 28,

    borderRadius: 50,
  },
  user: {
    color: '#212121',

    fontFamily: 'Roboto-medium',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
  textContainer: {
    flexGrow: 1,
    padding: 16,

    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  text: {
    marginBottom: 8,

    color: '#212121,',

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 18,
  },
  textDate: {
    fontSize: 10,

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    lineHeight: 12,
    color: '#BDBDBD',
    textAlign: 'right',
  },
});
