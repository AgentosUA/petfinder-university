import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Wrapper from '../../components/Wrapper/Wrapper';

class SearchPage extends Component {
  state = {
    animals: [],
    url: window.location.href
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (!this.state.animals || this.state.url !== window.location.href);
    const userParams = window.location.search;
    console.log();
    axios
      .get('/adverts' + userParams)
      .then(result => {
        console.log(result.data.adverts);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Wrapper>
        <main>
          <div className="wrapper">
            <section className="search">
              <h2>Результати пошуку</h2>
              <nav>
                <a href="/">Назад</a>
                <a href="/">2</a>
                <a href="/">3</a>
                <a href="/">4</a>
                <a href="/">Вперед</a>
              </nav>
              <div className="search-block">
                <div className="search-result">
                  <div className="item">1</div>
                </div>
                <div className="search-filter">
                  <h3>Фільтр</h3>
                  <div className="search-inputs">
                    <select name="" id="">
                      <option value="">Тип (усі)</option>
                      <option value="cats">Коти</option>
                      <option value="dogs">Собаки</option>
                      <option value="other">Інші</option>
                    </select>
                    <select name="" id="">
                      <option value="status">Стать (усі)</option>
                      <option value="escaped">Він</option>
                      <option value="founded">Вона</option>
                    </select>
                    <select name="" id="">
                      <option value="status">Статус (усі)</option>
                      <option value="escaped">Зниклі</option>
                      <option value="founded">Знайдені</option>
                    </select>
                    <input type="number" placeholder="Вік" min="0" max="100" />
                  </div>
                  <Link to="/">
                    <button className="search-button" to="/">
                      Застосувати
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </Wrapper>
    );
  }
}

export default SearchPage;
