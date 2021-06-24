import styles from './main-search.module.scss';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import Link from 'next/link';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uk from 'date-fns/locale/uk';
import { animalType, animalGender, animalStatus } from '@shared';
import { useEffect, useState } from 'react';
import { Button } from '@components';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchParams, State } from '@store';

registerLocale('uk', uk)

const MainSearch = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const { searchParams: { type, gender, status, city, date } } = useSelector((state: State) => state.general)

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
      date: `${String(day).length > 1 ? day : '0' + day}.${String(month).length > 1 ? month : '0' + month}.${year}`
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
          value={startDate}
          onChange={date => setStartDate(date)}
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
