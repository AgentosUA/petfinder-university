import styles from './main-search.module.scss';
import Select from 'react-select'
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uk from 'date-fns/locale/uk';
import { animalType } from './data';
import { useState } from 'react';

registerLocale('uk', uk)

const MainSearch = () => {
  const [startDate, setStartDate] = useState(new Date());

  const inputStyles = {
    input: (provided) => {
      return {
        ...provided,
        width: '105px',
        height: '30px',
        border: 'none'
      }
    },
    controls: (provided) => {
      return {
        ...provided,
        borderRadiud: 0
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
        <Select options={animalType} styles={inputStyles} placeholder='Тип' />
        <Select options={animalType} styles={inputStyles} placeholder='Стать' />
        <Select options={animalType} styles={inputStyles} placeholder='Статус' />
        <Select options={animalType} styles={inputStyles} placeholder='Місто' />
        <DatePicker
          locale="uk"
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
        <button className={styles.button}>Пошук</button>
      </div>
    </div>
  )
};

export { MainSearch };
