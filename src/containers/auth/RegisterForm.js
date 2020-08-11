import React from 'react';
import AuthForm from '../../components/auth/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { initForm, changeField, register } from '../../modules/auth';
import { useEffect } from 'react';
import { check } from '../../modules/user';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // TODO: error
      return;
    }
    dispatch(register({ username, password }));
  };

  useEffect(() => {
    dispatch(initForm('register'));
  }, [dispatch]);

  // success, failure
  useEffect(() => {
    if (authError) {
      console.log('error');
      console.log(authError);

      return;
    }
    if (auth) {
      console.log('register : success');
      console.log(auth);
      dispatch(check()); // user check
    }
  }, [auth, authError, dispatch]);

  // check if user is set
  useEffect(() => {
    if (user) {
      console.log('check : success');
      console.log(user);
    }
  }, [user]);

  return <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default RegisterForm;
