import React from 'react';
import { useFormik } from 'formik';
import { Button, Section } from '../../core';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { LoginSchema } from './validation'

import styles from './Login.module.scss';
import { Input } from '../../core';
import { login } from '../../store/general';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: LoginSchema,
    onSubmit: (value) => {
      console.log(value);
      dispatch(login())
    }
  })

  return (
    <Section>
      <form className={styles.loginForm} onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }} noValidate>
        <h1>Авторизація</h1>
        <label htmlFor='login'>Логін</label>
        {form.errors.login && form.touched.login ? <span className={styles.errorMessage}>{form.errors.login}</span> : null}
        <Input name='login' type='text' placeholder='Логін' onChange={form.handleChange} />
        <label htmlFor='password'>Пароль</label>
        {form.errors.password && form.touched.password ? <span className={styles.errorMessage}>{form.errors.password}</span> : null}
        <Input name='password' type='password' placeholder='Пароль' onChange={form.handleChange} />
        <div className={styles.extraOptions}>
          <NavLink to=''>Забули пароль?</NavLink>
          <NavLink to=''>Немаєте акаунту?</NavLink>
        </div>
        <Button type='submit' theme='secondary' disabled={Boolean(form.errors.login && form.errors.password)} uppercase>Увійти</Button>
      </form>
    </Section>
  );
};

export { Login };
