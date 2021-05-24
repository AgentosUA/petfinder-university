import Router from "next/router";
import React, { Fragment, useEffect, useRef, useState } from 'react';

import cookie from 'cookie-cutter';

import { animalType, animalGender, animalStatus } from '@shared';

import styles from './create.module.scss';

import * as Yup from 'yup';
import uk from 'date-fns/locale/uk';
import axios from 'axios';
import { Button } from '@core';
import { useSelector } from 'react-redux';

import { useFormik } from 'formik';

import Select from 'react-select';
import DatePicker, { registerLocale } from 'react-datepicker';
import { borderRadius } from 'react-select/src/theme';
import { State } from '@store';

registerLocale('uk', uk)

export const Create = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const imagePreviewInput = useRef(null);

  const { isLoggedIn } = useSelector((state: State) => state.general)

  const previewChange = (event) => {
    event.preventDefault();
    setImagePreviewUrl(URL.createObjectURL(event.target.files[0]));
    setFieldValue('image', event.target.files[0])
  }

  const selectImage = () => {
    imagePreviewInput.current.click();
  }

  const validationSchema = Yup.object({
    type: Yup.string().required('Оберіть тип'),
    status: Yup.string().required('Оберіть статус'),
    gender: Yup.string().required('Оберіть стать'),
    city: Yup.string().required('Оберіть місто'),
    date: Yup.string().required('Оберіть дату зникнення / знаходження'),
    name: Yup.string().required('Введіть ім\'я тваринки'),
    description: Yup.string().required('Введіть опис'),
    image: Yup.mixed().required('Оберіть зображення'),
  })

  const { handleSubmit, handleChange, isSubmitting, errors, setFieldValue, setErrors, isValid } = useFormik({
    initialValues: {
      type: '',
      status: '',
      gender: '',
      city: '',
      name: '',
      description: '',
      date: '',
      image: null
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async ({ name, type, status, image, gender, description, date, city }) => {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('type', type);
        formData.append('status', status);
        formData.append('image', image);
        formData.append('gender', gender);
        formData.append('description', description);
        formData.append('date', date);
        formData.append('city', city);
        await axios({
          method: 'POST',
          url: `${process.env.API}/posts`,
          headers: {
            'Authorization': `Bearer ${cookie.get('token')}`
          },
          data: formData
        });

        setIsSuccess(true);
      } catch (error) {
        switch (error?.response?.status) {
          case 400:
            setErrors({ type: error?.response?.data?.message || 'Були введені помилкові дані' });
            break;
          case 401:
            Router.push('/login');
            break;
          default:
            setErrors({ type: 'Сталась критична помилка, спробуйте ще раз!' });
            break;
        }
      }
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
        marginRight: '5px',
        border: '2px solid #FF8C00',
        borderRadius: '8px'
      }
    },
    control: (provided) => {
      return {
        ...provided,
        border: 'none',
        borderRadius: '8px'
      }
    }
  }

  return (
    <Fragment>
      <h2 className={styles.title}>{isSuccess ? 'Оголошення успішно створено!' : 'Створити оголошення'}</h2>
      {
        !isSuccess ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            {!isValid && <ul className={styles.error}>
              {Object.entries(errors).map(([key, value]) => {
                return <li>{value}</li>
              })}
            </ul>}
            <label htmlFor='type'>Тип тваринки</label>
            <Select options={animalType} styles={inputStyles} placeholder='Тип' onChange={({ value }) => setFieldValue('type', value)} name='type' />
            <label htmlFor='status'>Статус тваринки</label>
            <Select options={animalStatus} styles={inputStyles} placeholder='Статус' onChange={({ value }) => setFieldValue('status', value)} name='status' />
            <label htmlFor='gender'>Стать тваринки</label>
            <Select options={animalGender} styles={inputStyles} placeholder='Стать' onChange={({ value }) => setFieldValue('gender', value)} name='gender' />
            <label htmlFor='city'>Місто</label>
            <input placeholder='Місто' onChange={handleChange} name='city' />
            <label htmlFor='name'>Ім'я тваринки</label>
            <input name='name' placeholder="Ім'я тваринки" onChange={handleChange} />
            <label htmlFor='description'>Опис тваринки та додаткова інформація</label>
            <textarea name='description' className={styles.description} placeholder='Опис тваринки' onChange={handleChange} />
            <label htmlFor='date'>Дата зникнення / знаходження тваринки</label>
            <DatePicker
              locale="uk"
              name='date'
              className={styles.date}
              placeholderText='Дата'
              selected={startDate}
              dateFormat='dd/MM/yyyy'
              wrapperClassName={styles.dateWrapper}
              onChange={date => { setStartDate(date); setFieldValue('date', date) }}
            />
            <Button onClick={selectImage} type='button' theme='light'>{imagePreviewUrl ? 'Змінити зображення' : 'Обрати зображення'}</Button>
            <input ref={imagePreviewInput} type="file" name='image' className={styles.imageInput} onChange={previewChange} accept='image/jpeg,image/png,image/gif' />
            {imagePreviewUrl && <img src={imagePreviewUrl} alt='animal preview' className={styles.preview} />}
            <Button type='submit' disabled={isSubmitting} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Створити оголошення</Button>
          </form>) : (
          <div className={styles.toProfile}>
            <Button link='/profile'>До профілю</Button>
          </div>
        )
      }
    </Fragment>
  )
};
