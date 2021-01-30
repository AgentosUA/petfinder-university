import React from 'react';
import { useFormik } from 'formik';
import { Button, Section } from '../../core';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { SignupSchema } from './validation'

import styles from './Signup.module.scss';
import { Input } from '../../core';
import { login } from '../../store/general';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const form = useFormik({
    initialValues: {
      login: '',
      email: '',
      rePassword: '',
      password: '',
    },
    enableReinitialize: true,
    validationSchema: SignupSchema,
    onSubmit: (value) => {
      console.log(value);
      dispatch(login())
    }
  })

  return (
    <Section>
      <form className={styles.loginForm} onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }} noValidate>
        <h1>Реєстрація</h1>
        <label htmlFor='login'>Логін</label>
        {form.errors.login && form.touched.login ? <span className={styles.errorMessage}>{form.errors.login}</span> : null}
        <Input name='login' type='text' placeholder='Логін' onChange={form.handleChange} />

        <label htmlFor='email'>Пошта</label>
        {form.errors.login && form.touched.login ? <span className={styles.errorMessage}>{form.errors.login}</span> : null}
        <Input name='login' type='text' placeholder='Пошта' onChange={form.handleChange} />

        <label htmlFor='password'>Пароль</label>
        {form.errors.password && form.touched.password ? <span className={styles.errorMessage}>{form.errors.password}</span> : null}
        <Input name='password' type='password' placeholder='Пароль' onChange={form.handleChange} />

        <label htmlFor='repassword'>Повторіть Пароль</label>
        {form.errors.password && form.touched.password ? <span className={styles.errorMessage}>{form.errors.password}</span> : null}
        <Input name='repassword' type='password' placeholder='Повторіть Пароль' onChange={form.handleChange} />

        <div className={styles.extraOptions}>
          <NavLink to='/login'>Вже маєте обліковий запис?</NavLink>
        </div>
        <Button type='submit' theme='secondary' disabled={Boolean(form.errors.login && form.errors.password)} uppercase>Реєстрація</Button>
      </form>
    </Section>
  );
};

export { Logout };
