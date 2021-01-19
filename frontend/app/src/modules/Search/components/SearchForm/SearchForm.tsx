import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import DatePicker, { registerLocale } from "react-datepicker";
import { animalType, genderType, statusType, city } from './data'
import Select from 'react-select';

import "react-datepicker/dist/react-datepicker.css"
import styles from './SearchForm.module.scss';

import uk from 'date-fns/locale/uk';
import { Button } from '../../../../core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

registerLocale('uk', uk)

const SearchForm: React.FC = () => {
  const history = useHistory();

  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderRadius: 0,
      margin: '0 5px auto 0',
      width: '140px',
      height: '40px',
    }),
    valueContainer: (base: any) => ({
      ...base,
      textAlign: 'center',
    }),
    singleValue: (base: any) => ({
      ...base,
      textAlign: 'center',
    }),
    menu: (base: any) => ({
      ...base,
      textAlign: 'center',
      margin: '0 auto'
    }),
    placeholder: () => ({ display: 'none' }),
    indicatorsContainer: (base: any) => ({ ...base, padding: '0' }),
    indicatorSeparator: () => ({ display: 'none' }),
  };

  const form = useFormik({
    initialValues: {
      type: 'all',
      status: 'all',
      gender: 'all',
      date: new Date().toUTCString(),
      city: 'all'
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      history.push(`/search?type=${values.type}&status=${values.status}&gender=${values.gender}&date=${values.date}&city=${values.city}`);
    }
  })

  const [selectedDate, setSelectedDate] = useState(new Date()) as any;

  return (
    <form onSubmit={form.handleSubmit} className={styles.form}>
      <Select
        defaultValue={animalType[0]}
        name='type'
        styles={customStyles}
        options={animalType}
        isSearchable={false}
        onChange={(value) => { form.setFieldValue('type', value?.value); }}
      />
      <Select
        defaultValue={statusType[0]}
        name='status'
        styles={customStyles}
        options={statusType}
        isSearchable={false}
      />
      <Select
        defaultValue={genderType[0]}
        name='gender'
        styles={customStyles}
        options={genderType}
        isSearchable={false}
      />
      <DatePicker
        dateFormat="dd/MM/yyyy"
        locale={uk}
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        className={styles.dataInput}
      />
      <Select
        defaultValue={city[0]}
        name='city'
        styles={customStyles}
        options={city}
        isSearchable
        noOptionsMessage={() => 'Не знайдено'}
      />
      <Button type='submit' theme='primary' uppercase>
        Шукати <FontAwesomeIcon icon={faSearch} />
      </Button>
    </form>
  );
};

export { SearchForm };
