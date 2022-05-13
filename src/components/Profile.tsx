import React from 'react';
import styled from 'styled-components';
import profile from 'src/images/profile.png';

export const Wrapper = styled.div`
  background-image: url(${profile});
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;

  svg {
    height: 4.2rem;
    max-height: 100%;
    width: auto;
  }
`;

function Profile() {
  return (
    <Wrapper>
      {<img src={`${process.env.PUBLIC_URL}/media/images/profile.png`}/>}
    </Wrapper>
  );
}

export default Profile;
