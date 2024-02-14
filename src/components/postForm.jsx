import React, {useState} from 'react';
import InputField from './inputField';
import PrimaryButton from './primaryButton';
import {useDispatch} from 'react-redux';
import {addPost} from '../redux/actions';
//import counterReducer from '../redux/reducers';

const PostForm = () => {
  const [postInput, setPostInput] = useState('');
  const dispatch = useDispatch();

  const onInputChangeHandler = e => {
    const {value} = e.target;
    setPostInput(value);
  };
  const onSubmitHandler = () => {
    // update the store
    const post = {
      id: Math.floor(Math.random() * 10000) + 1,
      description: postInput,
      userId: 1234,
      userName: 'Kiran Mohare',
      imgUrl: 'https://somerandom/image/323232',
      comments: [],
    };
    dispatch(addPost(post));
    setPostInput('');
  };
  return (
    <div>
      <InputField
        id={'postInput'}
        name={'postInput'}
        onChangeHandler={onInputChangeHandler}
        defaultValue={postInput}
        placeholder={'Post new thread...'}
      />
      <PrimaryButton label={'Post'} onClickHandler={onSubmitHandler} />
    </div>
  );
};

export default PostForm;
