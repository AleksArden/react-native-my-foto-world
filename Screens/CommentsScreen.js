import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import { selectUserAvatar, selectUserLogin } from '../redux/auth/authSelectors';

import ButtonText from '../Components/ButtonText';
import CommentItem from '../Components/CommentItem';

const CommentsScreen = ({ route }) => {
  const { image, postId } = route.params;
  const userLogin = useSelector(selectUserLogin);
  const userAvatar = useSelector(selectUserAvatar)

  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [isOnFocus, setIsOnFocus] = useState(false);

  useEffect(() => {
    getAllComments();
  }, []);
  const createComment = async () => {
    try {
      await addDoc(collection(db, 'posts', postId, 'comments'), {
        comment,
        userAvatar,
        userLogin,
        date: new Date().toLocaleDateString('de-DE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        time: new Date().toLocaleTimeString(),
      });
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };
  const getAllComments = () => {
    onSnapshot(collection(db, 'posts', postId, 'comments'), (data) => {
      setAllComments(
        data.docs.map((doc) => ({ ...doc.data(), postId: doc.id }))
      );
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>

        <View style={styles.commentsContainer}>
          <FlatList
            data={allComments}
            keyExtractor={(item) => item.postId}
            renderItem={({ item, index }) => (
              <CommentItem commentItem={item} index={index} />
            )}
          />

          <View style={styles.form}>
            <TextInput
              style={isOnFocus ? inputOnFocus : styles.input}
              autoComplete="off"
              onChangeText={(value) => setComment(value)}
              placeholder="Comment"
              placeholderTextColor="#BDBDBD"
              cursorColor="#212121"
              value={comment}
              onFocus={() => setIsOnFocus(true)}
              onBlur={() => setIsOnFocus(false)}
            />
            <ButtonText style={styles.btn} onPress={createComment}>
              <AntDesign name="arrowup" size={24} color="#ffffff" />
            </ButtonText>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CommentsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,

    backgroundColor: '#ffffff',
  },
  imageContainer: {
    marginBottom: 32,
  },
  image: {
    height: 240,
    marginBottom: 8,

    borderRadius: 8,
  },
  commentsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    position: 'relative',
  },
  input: {
    height: 50,
    padding: 16,

    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    borderColor: '#E8E8E8',
    borderWidth: 1,

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
  },
  inputOnFocus: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FF6C00',
  },
  btn: {
    position: 'absolute',
    top: 8,
    right: 8,

    alignItems: 'center',
    justifyContent: 'center',
    width: 34,
    height: 34,

    borderRadius: 50,
    backgroundColor: '#FF6C00',
  },
});

const inputOnFocus = StyleSheet.compose(styles.input, styles.inputOnFocus);
