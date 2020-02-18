import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import axios from 'axios';

import Wrapper from '../../components/Wrapper/Wrapper';
import Advert from '../../components/Advert/Advert';

class SearchPage extends Component {
  state = {
    animals: [],
    url: window.location.href,
    isLoaded: false,
    type: 'all',
    gender: 'all',
    status: 'all',
    old: 'all'
  };

  componentDidMount() {
    console.log('Mount');
    this.loadData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== window.location.href) {
      console.log('Update');
      this.loadData();
    }
  }

  loadData() {
    const userParams = window.location.search;
    axios
      .get('/adverts' + userParams)
      .then(result => {
        console.log(result.data.adverts);
        const data = result.data.adverts.map(item => {
          return <Advert key={item._id} src="test" name={item.name} />;
        });
        this.setState({
          animals: data,
          url: window.location.href,
          isLoaded: true
        });
      })
      .catch(err => console.log(err));
  }

  setSearchParams(e) {
    const paramName = e.target.name;
    switch (paramName) {
      case 'type':
        this.setState({ type: e.target.value });
        break;
      case 'gender':
        this.setState({ gender: e.target.value });
        break;
      case 'status':
        this.setState({ status: e.target.value });
        break;
      case 'old':
        this.setState({ old: e.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    this.setSearchParams = this.setSearchParams.bind(this);
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
                <div className="search-result">{this.state.animals}</div>
                <div className="search-filter">
                  <h3>Фільтр</h3>
                  <div className="search-inputs">
                  <select
                    ref="type"
                    name="type"
                    id=""
                    onChange={this.setSearchParams}
                  >
                    <option value="all">Тип (усі)</option>
                    <option value="cats">Коти</option>
                    <option value="dogs">Собаки</option>
                    <option value="other">Інші</option>
                  </select>
                  <select
                    ref="gender"
                    name="gender"
                    id=""
                    onChange={this.setSearchParams}
                  >
                    <option value="all">Стать (усі)</option>
                    <option value="he">Він</option>
                    <option value="she">Вона</option>
                  </select>
                  <select
                    ref="status"
                    name="status"
                    id=""
                    onChange={this.setSearchParams}
                  >
                    <option value="all">Статус (усі)</option>
                    <option value="escaped">Зниклі</option>
                    <option value="founded">Знайдені</option>
                  </select>
                  <input
                    ref="old"
                    name="old"
                    type="number"
                    placeholder="Вік"
                    min="0"
                    max="100"
                    onChange={this.setSearchParams}
                  />
                </div>
                <NavLink
                  to={
                    '/search?type=' +
                    this.state.type +
                    '&gender=' +
                    this.state.gender +
                    '&status=' +
                    this.state.status +
                    '&old=' +
                    this.state.old
                  }>
                    <button className="search-button" to="/">
                      Застосувати
                    </button>
                  </NavLink>
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
