import styles from './main-search.module.scss';
import Select from 'react-select'
import Link from 'next/link';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uk from 'date-fns/locale/uk';
import { animalType, animalGender, animalStatus } from './data';
import { useState } from 'react';
import { Button } from 'core/button';

registerLocale('uk', uk)

const MainSearch = () => {
  const [startDate, setStartDate] = useState(new Date());

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
        <Select value={animalType[0]} options={animalType} styles={inputStyles} placeholder='Тип' />
        <Select value={animalGender[0]} options={animalGender} styles={inputStyles} placeholder='Стать' />
        <Select value={animalStatus[0]} options={animalStatus} styles={inputStyles} placeholder='Статус' />
        <Select options={animalType} styles={inputStyles} placeholder='Місто' />
        <DatePicker
          locale="uk"
          className={styles.date}
          placeholderText='Дата'
          selected={startDate}
          dateFormat='dd/MM/yyyy'
          onChange={date => setStartDate(date)}
        />
        <Link href='/'><button className={styles.button}>Шукати</button></Link>
      </div>
      <div className={styles.actions}>
        <Button>Створити оголошення</Button>
        <Button>Придбати нашийник</Button>
      </div>
    </div>
  )
};

export { MainSearch };
