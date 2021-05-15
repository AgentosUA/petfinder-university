import Head from 'next/head';
import Router from "next/router";
import React, { Fragment, useEffect, useState } from 'react';
import { Container, Layout, MainSearch, Post } from '@components';
import { animalType, animalGender, animalStatus } from '@shared';
import styles from './index.module.scss';
import uk from 'date-fns/locale/uk';
import axios from 'axios';
import { Button } from '@core';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { login } from '@store';
import { Form, useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import DatePicker, { registerLocale } from 'react-datepicker';

registerLocale('uk', uk)

export default function Search() {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);

  const validationSchema = Yup.object({
    type: Yup.string().required('Виберіть тип'),
    status: Yup.string().required('Виберіть статус'),
    gender: Yup.string().required('Виберіть стать')
  })

  const { handleSubmit, handleChange, isSubmitting, errors, setFieldValue, values } = useFormik({
    initialValues: {
      type: '',
      status: '',
      gender: ''
    },
    // validationSchema,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async () => {

    },
  });

  const inputStyles = {
    input: (provided) => {
      return {
        ...provided,
        width: '115px',
        height: '30px',
        border: 'none'
      }
    },
    container: (provided) => {
      return {
        ...provided,
        margin: '5px auto',
        marginRight: '5px'
      }
    },
    controls: (provided) => {
      return {
        ...provided,
        borderRadius: 0
      }
    }
  }

  return (
    <Layout>
      <Head>
        <title>Створити оголошення | Petfinder</title>
      </Head>
      <MainSearch />
      <Container>
        <h2 className={styles.title}>Створити оголошення</h2>
        <form className={styles.form} onClick={handleSubmit}>
          <span className={styles.error}>{errors.type} {errors.status} {errors.gender}</span>
          <label htmlFor='type'>Тип тваринки</label>
          <Select options={animalType} styles={inputStyles} placeholder='Тип' onChange={(value) => setFieldValue('type', value)} name='type' value={values.type} />
          <label htmlFor='status'>Статус тваринки</label>
          <Select options={animalStatus} styles={inputStyles} placeholder='Статус' onChange={handleChange} name='status' />
          <label htmlFor='gender'>Стать тваринки</label>
          <Select options={animalGender} styles={inputStyles} placeholder='Стать' onChange={handleChange} name='gender' />
          <label htmlFor='city'>Місто</label>
          <Select options={animalGender} styles={inputStyles} placeholder='Місто' onChange={handleChange} name='city' />
          <label htmlFor='date'>Дата зникнення / знаходження тваринки</label>
          <DatePicker
            locale="uk"
            name='date'
            className={styles.date}
            placeholderText='Дата'
            selected={startDate}
            dateFormat='dd/MM/yyyy'
            wrapperClassName={styles.dateWrapper}
            onChange={date => setStartDate(date)}
          />
          <Button type='submit' disabled={isSubmitting}>Створити оголошення</Button>
        </form>
      </Container>
    </Layout>
  )
};
