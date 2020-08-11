import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, loading, error }) => {
  if (error) {
    return <PostViewerBlock>Error!</PostViewerBlock>;
  }
  if (loading || !post) {
    return null;
  }

  const {
    object_name,
    producer,
    producer_name,
    owner_id,
    owner_name,
    path,
    modifier,
    modifier_name,
    r_object_type,
    r_version_label,
    r_content_size,
    r_creation_date,
    r_modify_date,
  } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{object_name}</h1>
        <SubInfo>
          <span>
            <b>{r_modify_date}</b> <b>{modifier_name}</b>
          </span>
          <span>
            <b>{r_content_size}</b> <b>{r_version_label}</b>
          </span>
        </SubInfo>
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: '<p>HTML Content...</p>' }}></PostContent>
    </PostViewerBlock>
  );
};

export default PostViewer;
