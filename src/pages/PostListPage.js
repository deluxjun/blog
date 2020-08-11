import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostList from '../components/posts/PostList';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <PostList></PostList>
    </>
  );
};

export default PostListPage;
