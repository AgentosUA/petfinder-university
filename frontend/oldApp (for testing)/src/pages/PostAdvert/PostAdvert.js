import React, { Component } from 'react';
import axios from 'axios';
class PostAdvert extends Component {
  state = {
    name: null,
    age: '',
    type: 'cat',
    gender: 'he',
    breed: null,
    status: 'escaped',
    description: null,
    image: null,
    allowPost: false
  };

  sendData() {
    axios
      .post('/advert/new', {
        name: this.state.name,
        age: this.state.age,
        type: this.state.type,
        gender: this.state.gender,
        breed: this.state.breed,
        status: this.state.status,
        description: this.state.description,
        image: this.state.image
      })
      .then(result => {
        console.log(result);
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
      case 'breed':
        this.setState({ breed: e.target.value });
        break;
      default:
        break;
    }
  }

  render() {
    this.setSearchParams = this.setSearchParams.bind(this);
    this.sendData = this.sendData.bind(this);

    return (
      <main>
        <div className="wrapper">
          <section className="add-advert">
            <h2>Створити оголошення</h2>
            <h3>*обов'язкові поля для заповнення</h3>
            <form action="">
              <label htmlFor="type">Тип*</label>
              <select
                ref="type"
                name="type"
                required
                onChange={this.setSearchParams}
              >
                <option value="cat">Коти</option>
                <option value="dog">Собаки</option>
                <option value="other">Інші</option>
              </select>
              <label htmlFor="gender">Стать*</label>
              <select
                ref="gender"
                name="gender"
                onChange={this.setSearchParams}
              >
                <option value="he">Він</option>
                <option value="she">Вона</option>
              </select>
              <label htmlFor="breed">Порода</label>
              <input
                ref="breed"
                name="breed"
                type="text"
                placeholder="Порода"
                min="0"
                max="100"
                onChange={this.setSearchParams}
              />
              <label htmlFor="status">Статус*</label>
              <select
                ref="status"
                name="status"
                onChange={this.setSearchParams}
              >
                <option value="escaped">Зниклі</option>
                <option value="founded">Знайдені</option>
              </select>
              <label htmlFor="image">Зображення*</label>
              <input type="file" name="image" required />
              <label htmlFor="name">Кличка</label>
              <input type="text" name="name" placeholder="Марсік, Барсік..." />
              <label htmlFor="description">Опис</label>
              <textarea
                name="description"
                placeholder="Білі лапки, чорний хвостик..."
              ></textarea>
              <div className="buttons">
                <button
                  onClick={this.sendData}
                  className="sumbit"
                  type="submit"
                  disabled={!this.state.allowPost}
                >
                  Подати оголошення
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    );
  }
}

export default PostAdvert;
