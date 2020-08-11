import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div``;

const SubInfo = (username, modifiedDate, modifier, contentSize, version) => {
  return (
    <SubInfoBlock>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>
        <b>{modifiedDate}</b> <b>{modifier}</b>
      </span>
      <span>
        <b>{contentSize}</b> <b>{version}</b>
      </span>
    </SubInfoBlock>
  );
};

export default SubInfo;
