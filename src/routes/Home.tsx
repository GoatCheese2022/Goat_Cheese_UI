import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {Button, Container, Form, Input, Label, responsive, Text} from 'styled-minimal';

import { spacer } from 'modules/theme';

import { name } from 'config';
import { STATUS } from 'literals';

import { login } from 'actions';

import Background from 'components/Background';
import Icon from 'components/Icon';
import Logo from 'components/Logo';

import { RootState } from 'types';

const Header = styled.div`
  margin-bottom: ${spacer(3)};
  text-align: center;

  svg {
    height: 10rem;
    width: auto;

    ${
      /* sc-custom '@media-query' */ responsive({
        lg: {
          height: '15rem',
        },
      })
    };
  }
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  line-height: 1.4;
  margin-bottom: ${spacer(3)};
  margin-top: 0;
  text-align: center;

  ${
    /* sc-custom '@media-query' */ responsive({
      lg: {
        fontSize: '4rem',
      },
    })
  };
`;

function Home() {
  const dispatch = useDispatch();
  const status = useSelector<RootState>(({ user }) => user.status);

  const handleClickLogin = () => {
    dispatch(login());
  };

  const handleSubmit = () => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Background key="Home" data-testid="Home">
      <Container fullScreen>
        <Header>
          <Logo />
        </Header>
        <Heading>{name}</Heading>
        <Form className="loginForm" onSubmit={handleSubmit()}>
          <Label>
            Username:
            <Input type="text" name="username" placeholder="username"/>
          </Label>
          <Label>
            Password:
            <Input type="password" name="password" placeholder="password" />
          </Label>
          <Button
            busy={status === STATUS.RUNNING}
            data-testid="Login"
            onClick={handleClickLogin}
            textTransform="uppercase"
            variant="white"
          >
            <Icon name="sign-in" />
            <Text ml={2}>Login</Text>
          </Button>
        </Form>
      </Container>
    </Background>
  );
}

export default Home;
