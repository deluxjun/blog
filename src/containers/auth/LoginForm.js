import React, { useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { initForm, changeField, login } from '../../modules/auth';
import { useEffect } from 'react';
import { check, tempSetUser } from '../../modules/user';
import { withRouter } from 'react-router-dom';
import { setAuthToken } from '../../lib/api/client';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initForm('login'));
  }, [dispatch]);

  useEffect(() => {
    console.log('user was updated: ' + user);
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.log('localStorage is not working');
        console.log(error);
      }
    }
  }, [history, user]);

  useEffect(() => {
    if (authError) {
      console.log('login error : ', authError);
      if (authError.errmsg) setError(authError.errmsg);
      else setError('login error');
      return;
    }
    if (auth) {
      console.log('login : success');
      console.log(auth);
      // TODO: set user state and header
      if (auth.list[0]) {
        const ticketId = auth.list[0].xedmSession;
        setAuthToken(ticketId); // set token to axios
        dispatch(tempSetUser(auth.list[0])); // set user state
      }
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  return (
    <AuthForm type="login" form={form} error={error} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default withRouter(LoginForm);
