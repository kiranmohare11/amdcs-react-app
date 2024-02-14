import React from 'react';
import {useSelector} from 'react-redux';
import PostItem from './postItem';

const PostList = () => {
  const posts = useSelector(state => state.postList);
  console.log('postList ', posts);

  return (
    <div>
      {posts &&
        posts.length > 0 &&
        posts.map(post => {
          return (
            <div key={post.id}>
              <PostItem
                description={post.description}
                userName={post.userName}
                alt={post.title}
                imgUrl={''}
                postId={post.id}
                comments={post.comments}
              />
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
