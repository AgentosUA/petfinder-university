import Router from "next/router";
import React, { Fragment, useEffect, useRef, useState } from 'react';

import cookie from 'cookie-cutter';

import { animalType, animalGender, animalStatus } from '@shared';

import styles from './edit.module.scss';

import * as Yup from 'yup';
import uk from 'date-fns/locale/uk';
import axios from 'axios';
import { Button } from '@core';
import { useSelector } from 'react-redux';

import { useFormik } from 'formik';

import Select from 'react-select';
import DatePicker, { registerLocale } from 'react-datepicker';

registerLocale('uk', uk)

export const Edit = ({ post, onClose, onSubmit }) => {
  const [startDate, setStartDate] = useState(new Date(post.date));
  const [imagePreviewUrl, setImagePreviewUrl] = useState(post.image);
  const imagePreviewInput = useRef(null);

  const previewChange = (event) => {
    event.preventDefault();
    setImagePreviewUrl(URL.createObjectURL(event.target.files[0]));
    setFieldValue('image', event.target.files[0])
  }

  const selectImage = () => {
    imagePreviewInput.current.click();
  }

  Yup.addMethod(Yup.mixed, 'notAll', function (input, msg) {
    return this.test({
      name: 'notAll',
      message: msg,
      test: value => value !== 'all'
    })
  })

  const validationSchema = Yup.object({
    type: Yup.object().shape({
      value: Yup.string().test('notAll', 'Оберіть тип', data => data !== 'all'),
      label: Yup.string()
    }).required('Оберіть тип'),
    status: Yup.object().shape({
      value: Yup.string().test('notAll', 'Оберіть статус', data => data !== 'all'),
      label: Yup.string()
    }).required('Оберіть статус'),
    gender: Yup.object().shape({
      value:Yup.string().test('notAll', 'Оберіть стать', data => data !== 'all'),
      label: Yup.string()
    }).required('Оберіть стать'),
    city: Yup.string().required('Оберіть місто'),
    date: Yup.string().required('Оберіть дату зникнення / знаходження'),
    name: Yup.string().required('Введіть ім\'я тваринки'),
    description: Yup.string().required('Введіть опис'),
    image: Yup.mixed(),
  })

  const { handleSubmit, handleChange, isSubmitting, errors, setFieldValue, setErrors, isValid, values } = useFormik({
    initialValues: {
      type: animalType.find((type) => type.value === post.type),
      status: animalStatus.find((status) => status.value === post.status),
      gender: animalGender.find((gender) => gender.value === post.gender),
      city: post.city,
      name: post.name,
      description: post.description,
      date: post.date,
      image: null
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
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
      <form className={styles.form} onSubmit={handleSubmit}>
        {!isValid && <ul className={styles.error}>
          {Object.entries(errors).map(([key, data]: any) => {
            return <li key={key}>{data?.value || data}</li>
          })}
        </ul>}
        <label htmlFor='type'>Тип тваринки</label>
        <Select options={animalType} value={values.type} styles={inputStyles} placeholder='Тип' onChange={(value) => setFieldValue('type', value)} name='type' />
        <label htmlFor='status'>Статус тваринки</label>
        <Select options={animalStatus} value={values.status} styles={inputStyles} placeholder='Статус' onChange={(value) => setFieldValue('status', value)} name='status' />
        <label htmlFor='gender'>Стать тваринки</label>
        <Select options={animalGender} value={values.gender} styles={inputStyles} placeholder='Стать' onChange={(value) => setFieldValue('gender', value)} name='gender' />
        <label htmlFor='city'>Місто</label>
        <input placeholder='Місто' onChange={handleChange} name='city' value={values.city} />
        <label htmlFor='name'>Ім'я тваринки</label>
        <input name='name' placeholder="Ім'я тваринки" onChange={handleChange} value={values.name} />
        <label htmlFor='description'>Опис тваринки та додаткова інформація</label>
        <textarea name='description' value={values.description} className={styles.description} placeholder='Опис тваринки' onChange={(value) => setFieldValue('description', value)} />
        <label htmlFor='date'>Дата зникнення / знаходження тваринки</label>
        <DatePicker
          locale="uk"
          name='date'
          className={styles.date}
          placeholderText='Дата'
          selected={startDate}
          dateFormat='dd/MM/yyyy'
          wrapperClassName={styles.dateWrapper}
          onChange={date => { setStartDate(date as any); setFieldValue('date', date) }}
        />
        <Button onClick={selectImage} type='button' theme='light'>{'Змінити зображення'}</Button>
        <input ref={imagePreviewInput} type="file" name='image' className={styles.imageInput} onChange={previewChange} accept='image/jpeg,image/png,image/gif' />
        {imagePreviewUrl && <img src={imagePreviewUrl} alt='animal preview' className={styles.preview} />}
        <Button type='submit' disabled={isSubmitting}>Зберегти</Button>
        <Button theme='light' onClick={onClose}>Відмінити</Button>
      </form>
    </Fragment>
  )
};
