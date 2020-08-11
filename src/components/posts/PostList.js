import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  &::first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 1rem;
  }
`;

const PostItem = () => {
  return (
    <PostItemBlock>
      <h2>Title</h2>
      <span>
        <b>UserName</b>
      </span>
      <span>
        <b>UserName</b>
      </span>
    </PostItemBlock>
  );
};

const PostList = () => {
  return (
    <PostListBlock>
      <div>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
      </div>
    </PostListBlock>
  );
};

export default PostList;
