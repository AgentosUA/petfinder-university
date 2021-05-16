import Head from 'next/head';
import { useState } from 'react';
import { Container, Layout, MainSearch } from '@components';

import PhoneInput from 'react-phone-number-input/input'

import styles from './index.module.scss';

import axios from 'axios';
import { Button } from '@core';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Search() {
  const [isRegistered, setIsRegistered] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().required('Введіть пошту!').email('Невірний формат пошти!'),
    name: Yup.string().required('Введіть ім\'я!'),
    password: Yup.string().required('Введіть пароль!').min(6, 'Пароль повинен містити мінумум 6 символів'),
    repassword: Yup.string().required('Введіть повторний пароль!').oneOf([Yup.ref('password'), null], 'Паролі мають співпадати!').min(6, 'Пароль повинен містити мінумум 6 символів'),
    phone: Yup.string().required('Введіть номер телефону!'),
  })

  const { handleSubmit, handleChange, isSubmitting, errors, setErrors, values, setFieldValue, isValid } = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      repassword: '',
      phone: ''
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({ email, name, password, phone }) => {
      try {
        await axios({
          method: 'POST',
          url: `${process.env.API}/users`,
          data: {
            email,
            name,
            password: String(password),
            phone
          }
        })

        setIsRegistered(true);
      } catch (error) {
        if (error?.response?.status === 400) {
          setErrors({ email: error?.response?.data?.message || 'Користувач вже існує!' });
          return;
        } else {
          setErrors({ email: 'Сталась критична помилка, спробуйте ще раз!' });
        }
      }
    }
  });

  return (
    <Layout>
      <Head>
        <title>Реєстрація | Petfinder</title>
      </Head>
      <MainSearch />
      <Container>
        <h2 className={styles.title}>{!isRegistered ? 'Реєстрація' : 'Вітаємо з реєстрацією!'}</h2>
        {!isRegistered &&
          (<form className={styles.form} onSubmit={handleSubmit}>
            {!isValid && <ul className={styles.error}>
              {Object.entries(errors).map(([key, value]) => {
                return <li>{value}</li>
              })}
            </ul>}
            <label htmlFor='email'>Ваша пошта</label>
            <input type='text' name='email' placeholder='Пошта' onChange={handleChange} value={values.email} />
            <label htmlFor='email'>Ваше ім'я</label>
            <input type='text' name='name' placeholder="Ім'я" onChange={handleChange} value={values.name} />
            <label htmlFor='password'>Ваш пароль</label>
            <input type='password' name='password' placeholder='Пароль' onChange={handleChange} value={values.password} />
            <label htmlFor='repassword'>Повторіть пароль</label>
            <input type='password' name='repassword' placeholder='Повторіть пароль' onChange={handleChange} value={values.repassword} />
            <label htmlFor='phone'>Номер телефону</label>
            <PhoneInput
              name='phone'
              country="UA"
              international
              withCountryCallingCode
              value={values.phone}
              onChange={(value) => setFieldValue('phone', value)} />
            <Button type='submit' disabled={isSubmitting}>Зареєструватись</Button>
            <div className={styles.help}>
              <Link href='/login'>Вже маєте обліковий запис?</Link>
            </div>
          </form>)
        }
        {isRegistered && (
          <div className={styles.form}>
            <Button link='/login'>Авторизуватись</Button>
          </div>
        )}
      </Container>
    </Layout>
  )
};
