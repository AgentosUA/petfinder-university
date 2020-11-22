import React from 'react';

// import styles from './SearchForm.module.scss'

const SearchForm: React.FC = () => {

  return (
    <form>
      <select name='type'>
        <option>Тип (Усі)</option>
        <option>Коти</option>
        <option>Собаки</option>
        <option>Інші</option>
      </select>
      <select name='gender'>
        <option>Стать (Усі)</option>
        <option>Він</option>
        <option>Вона</option>
      </select>
      <select name='status'>
        <option>Статус (Усі)</option>
        <option>Зник</option>
        <option>Знайдено</option>
      </select>
      <input type="date" name="" id=""/>
    </form>
  );
};

export { SearchForm };
