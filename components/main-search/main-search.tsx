import styles from './main-search.module.scss';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { animalType, animalGender, animalStatus } from '@shared';
import { useEffect, useState } from 'react';
import { Button } from '@components';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchParams, State } from '@store';

// registerLocale('uk', uk)

const MainSearch = () => {
  const dispatch = useDispatch();
  // const { mobile } = useMediaPoints(true);
  const { searchParams: { type, gender, status, city, date } } = useSelector((state: State) => state.general)
  const [paramDay, paramMonth, paramYear] = String(date).split('.');
  const defaultDate = (date === 'all' || date === '') ? null : new Date(`${paramMonth}/${paramDay}/${paramYear}`);
  const [startDate, setStartDate] = useState(defaultDate);

  const updateSearchParams = (params) => {
    dispatch(setSearchParams(params))
  }

  useEffect(() => {
    if (!startDate) return;
    const generatedDate = startDate;
    const day = generatedDate.getDate();
    const month = generatedDate.getMonth() + 1;
    const year = generatedDate.getFullYear();

    dispatch(setSearchParams({
      type,
      gender,
      status,
      city,
      date: startDate ? `${String(day).length > 1 ? day : '0' + day}.${String(month).length > 1 ? month : '0' + month}.${year}` : 'all'
    }));
  }, [startDate])

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
        marginRight: '5px',
        marginBottom: '6px'
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
    <div className={styles.mainSearch}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Pet finder</h2>
        <p className={styles.subtitle}>Пошук ваших улюбленців</p>
      </div>
      <div className={styles.filters}>
        <Select value={animalType.find((item) => item.value === type)} options={animalType} styles={inputStyles} placeholder='Тип' onChange={({ value }) => updateSearchParams({ gender, status, city, date, type: value })} />
        <Select value={animalStatus.find((item) => item.value === status)} options={animalStatus} styles={inputStyles} placeholder='Статус' onChange={({ value }) => updateSearchParams({ type, gender, city, date, status: value })} />
        <Select value={animalGender.find((item) => item.value === gender)} options={animalGender} styles={inputStyles} placeholder='Стать' onChange={({ value }) => updateSearchParams({ type, status, city, date, gender: value })} />
        <input name='city' className={styles.input} type='text' value={city} placeholder='Місто' onChange={(e) => updateSearchParams({ type, gender, status, date, city: e.target.value })} />
        <DatePicker
          locale="uk"
          className={styles.input}
          placeholderText='Дата'
          selected={startDate}
          dateFormat='dd/MM/yyyy'
          value={startDate as any}
          onChange={value => {setStartDate(value as any || null); updateSearchParams({ type, gender, status, city, date: value || 'all' })}}
        />
        <button onClick={() => Router.push(`/search?type=${type || 'all'}&gender=${gender || 'all'}&status=${status || 'all'}&city=${city || 'all'}&date=${date || 'all'}&page=1`)} className={styles.button}>Шукати</button>

      </div>
      <div className={styles.actions}>
        <Button link='/create'>Створити оголошення</Button>
        <Button>Придбати нашийник</Button>
      </div>
    </div>
  )
};

export { MainSearch };
