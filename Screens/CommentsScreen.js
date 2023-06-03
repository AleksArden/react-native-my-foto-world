import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ButtonText from '../Components/ButtonText';
import { useSelector } from 'react-redux';
import { selectUserLogin } from '../redux/auth/authSelectors';
import { AntDesign } from '@expo/vector-icons';
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import CommentItem from '../Components/CommentItem';

const CommentsScreen = ({ route }) => {
  const { image, postId } = route.params;
  const userLogin = useSelector(selectUserLogin);

  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [isOnFocus, setIsOnFocus] = useState(false);

  useEffect(() => {
    getAllComments();
  }, []);
  const createComment = async () => {
    await addDoc(collection(db, 'posts', postId, 'comments'), {
      comment,
      userLogin,
      time: new Date().toLocaleString(),
    });
    setComment('');
  };
  const getAllComments = async () => {
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

    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
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
    backgroundColor: '#E8E8E8',
    borderRadius: 100,
    padding: 16,

    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,

    fontFamily: 'Roboto-regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  inputOnFocus: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FF6C00',
  },
  btn: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const inputOnFocus = StyleSheet.compose(styles.input, styles.inputOnFocus);
