import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <main>
        <div class="wrapper">
          <section class="login">
            <h2>Авторизація</h2>
            <form action="">
              <input type="text" placeholder="Логін / пошта" required />
              <input type="password" placeholder="Пароль" required />
              <div class="buttons">
                <span type="submit">
                  <a href="/restore">Забули пароль?</a>
                </span>
                <button class="sumbit" type="submit">
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
