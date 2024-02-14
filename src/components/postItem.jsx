import React from 'react';

const PostItem = ({imgUrl, alt, userName, description}) => {
  return (
    <div>
      <div className='user-avatar'>
        <span>
          <span className='user-avatar-initials'>{userName.charAt(0)}</span>
          <img src={imgUrl ? imgUrl : ''} alt={alt} />
        </span>
      </div>
      <div>
        <h3>{userName}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PostItem;
