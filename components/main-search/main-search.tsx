import styles from './main-search.module.scss';
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import Link from 'next/link';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uk from 'date-fns/locale/uk';
import { animalType, animalGender, animalStatus } from '@shared';
import { useEffect, useState } from 'react';
import { Button } from 'core/button';

registerLocale('uk', uk)

const MainSearch = () => {
  const [startDate, setStartDate] = useState(null);
  const [searchParams, setSearchParams] = useState({
    type: '',
    gender: '',
    status: '',
    city: '',
    date: ''
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
        <Select options={animalType} styles={inputStyles} placeholder='Тип' onChange={({ value }) => setSearchParams({ ...searchParams, type: value })} />
        <Select options={animalStatus} styles={inputStyles} placeholder='Статус' onChange={({ value }) => setSearchParams({ ...searchParams, status: value })} />
        <Select options={animalGender} styles={inputStyles} placeholder='Стать' onChange={({ value }) => setSearchParams({ ...searchParams, gender: value })} />
        <input name='city' className={styles.input} type='text' value={searchParams.city} placeholder='Місто' onChange={( e ) => setSearchParams({ ...searchParams, city: e.target.value })} />
        <DatePicker
          locale="uk"
          className={styles.input}
          placeholderText='Дата'
          selected={startDate}
          dateFormat='dd/MM/yyyy'
          onChange={date => setStartDate(date)}
        />
        <Link href={`/search?type=${searchParams.type || 'all'}&gender=${searchParams.gender || 'all'}&status=${searchParams.status || 'all'}&city=${searchParams.city || 'all'}`}>
          <button className={styles.button}>Шукати</button>
        </Link>
      </div>
      <div className={styles.actions}>
        <Button link='/create'>Створити оголошення</Button>
        <Button>Придбати нашийник</Button>
      </div>
    </div>
  )
};

export { MainSearch };
