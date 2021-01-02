import { useFormik } from 'formik';
import React, { useState } from 'react';
import Select from 'react-select';
import { animalType, genderType, statusType } from './data'
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import styles from './SearchForm.module.scss';

import uk from 'date-fns/locale/uk';
import { Button } from '../../../../core';
registerLocale('uk', uk)

const SearchForm: React.FC = () => {
  const customStyles = {
    control: (base: any) => ({
      ...base,
      borderRadius: 0,
      margin: '0 5px 15px 5px',
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

  const onSubmit = () => {
    console.log('test');
  };

  const formik = useFormik({
    initialValues: {
      type: 'all',
      status: 'all',
      gender: 'all'
    },
    onSubmit
  })

  const [selectedDate, setSelectedDate] = useState(new Date()) as any;

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Select
        defaultValue={animalType[0]}
        name='type'
        styles={customStyles}
        options={animalType}
        isSearchable={false}
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
      {/* <input type="date" name="" id="" onChange={(data) => console.log(data.target.value)} /> */}
      <Button type='submit' text='Шукати' />
    </form>
  );
};

export { SearchForm };
