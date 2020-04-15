import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <main>
        <div className="wrapper">
          <section className="login">
            <h2>Авторизація</h2>
            <form action="">
              <label htmlFor="login">Пошта</label>
              <input type="text" name="login" placeholder="Пошта" required />
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                placeholder="Пароль"
                required
              />

              <div className="buttons">
                <span type="submit">
                  <a href="/restore">Забули пароль?</a>
                </span>
                <button className="sumbit" type="submit">
                  Увійти
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    );
  }
}

export default LoginPage;
