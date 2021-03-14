import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik';
import { animalType, genderType, statusType, city, month } from './data'
import Select from 'react-select';


import styles from './SearchForm.scss';
import 'react-day-picker/lib/style.css';


import { Button } from '../../../../core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const SearchForm: React.FC = () => {
  const history = useHistory();
  const [selectedDate, setSelectedDate] = useState(null) as any;

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
      date: selectedDate,
      city: 'all'
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      history.push(`/search?type=${values.type}&status=${values.status}&gender=${values.gender}&date=${selectedDate}&city=${values.city}`);
    }
  })

  return (
    <form className={styles.form} onSubmit={(e) => { e.preventDefault(); form.handleSubmit() }}>
      <Select
        defaultValue={animalType[0]}
        name='type'
        styles={customStyles}
        options={animalType}
        isSearchable={false}
        onChange={(value) => form.setFieldValue('type', value?.value)}
      />
      <Select
        defaultValue={statusType[0]}
        name='status'
        styles={customStyles}
        options={statusType}
        isSearchable={false}
        onChange={(value) => form.setFieldValue('status', value?.value)}
      />
      <Select
        defaultValue={genderType[0]}
        name='gender'
        styles={customStyles}
        options={genderType}
        isSearchable={false}
        onChange={(value) => form.setFieldValue('gender', value?.value)}
      />
      <Select
        defaultValue={city[0]}
        name='city'
        styles={customStyles}
        options={city}
        isSearchable
        noOptionsMessage={() => 'Не знайдено'}
        onChange={(value) => form.setFieldValue('city', value?.value)}
      />

      <DayPickerInput
        placeholder="Оберіть дату"
        dayPickerProps={{
          locale: 'uk-ua',
          months: month,
          // weekdaysLong: WEEKDAYS_LONG[locale],
          // firstDayOfWeek: FIRST_DAY_OF_WEEK[locale],
          // labels: LABELS[locale]
        }}
        onDayChange={day => console.log(day)} />
      <Button type='submit' theme='primary' uppercase>
        Шукати <FontAwesomeIcon icon={faSearch} />
      </Button>
    </form>
  );
};

export { SearchForm };
