import React, { Component } from 'react';

class PostAdvert extends Component {
  render() {
    return (
      <main>
        <div className="wrapper">
          <section className="add-advert">
            <h2>Створити оголошення</h2>
            <form action="">
              <label for="type">Тип</label>
              <select
                ref="type"
                name="type"
                id=""
                onChange={this.setSearchParams}
              >
                <option value="cat">Коти</option>
                <option value="dog">Собаки</option>
                <option value="other">Інші</option>
              </select>
              <label for="gender">Стать</label>
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
              <label for="breed">Порода</label>
              <input
                ref="old"
                name="old"
                type="text"
                placeholder="Вік"
                min="0"
                max="100"
                onChange={this.setSearchParams}
              />
              <label for="status">Статус</label>
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
              <label for="image">Зображення</label>
              <input type="file" name="image" />
              <label for="description">Опис</label>
              <textarea name="description" placeholder="Білі лапки"></textarea>
              <div className="buttons">
                <button className="sumbit" type="submit">
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
