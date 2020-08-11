import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const AuthFormBlock = styled.div``;

const StyledInput = styled.input``;

const Footer = styled.div``;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="User ID"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={onChange}
          value={form.password}
        ></StyledInput>
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="Password Confirm"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ErrorMessage>{error}</ErrorMessage>
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? <Link to="/register">Register</Link> : <Link to="/login">Login</Link>}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
