import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Container, responsive } from 'styled-minimal';

import { appColor, headerHeight, spacer } from 'modules/theme';

import { logOut } from 'actions';

import Icon from 'components/Icon';

const HeaderWrapper = styled.header`
  background-color: #b91d1d;
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  &:before {
    background-color: ${appColor};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const HeaderContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: flex-end;
  padding-bottom: ${spacer(1)};
  padding-top: ${spacer(1)};
`;

const Logout = styled.button`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 1.0rem;
  padding: ${spacer(0.2)};

  ${responsive({ lg: { fontSize: '1.5rem' } })}; /* stylelint-disable-line */

  &.active {
    color: #fff;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: capitalize;
  }
`;

export default function Header() {
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch(logOut());
  };

  return (
    <HeaderWrapper data-testid="Header">
      <HeaderContainer>
        <Logout onClick={handleClickLogout}>
          <span>logout</span>
          <Icon name="sign-out" width={16} />
        </Logout>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
