import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class SignUpPage extends Component {
  state = {
    email: '',
    name: '',
    password: '',
    repassword: ''
  }

  setInputDataToState(e) {
    const dataType = e.target.name;
    switch (dataType) {
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'name':
        this.setState({ name: e.target.value });
        break;
      case 'password':
        this.setState({ password: e.target.value });
        break;
      case 'repassword':
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
  }

  signUp() {
    let data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    if (this.state.password !== this.state.repassword) {
      alert("Паролі не співпадають!");
    } else {
      axios.post('/signup', data)
        .then(result => {
          alert(result);
        })
        .catch(err => console.log(err));
    }


  }

  render() {
    this.signUp = this.signUp.bind(this);
    this.setInputDataToState = this.setInputDataToState.bind(this);

    return (
      <main>
        <div className="wrapper">
          <section className="login">
            <h2>Реєстрація</h2>
            <form>
              <input type="text" name="email" placeholder="Email" required onChange={this.setInputDataToState} />
              <input type="text" name="name" placeholder="Ім'я" required onChange={this.setInputDataToState} />
              <input type="password" name="password" placeholder="Пароль" required onChange={this.setInputDataToState} />
              <input type="password" name="repassword" placeholder="Повторіть пароль" required onChange={this.setInputDataToState} />
              <div className="buttons">
                <span type="submit">
                  <Link to="/login">Вже маєте акаунт?</Link>
                </span>
                <button className="sumbit" onClick={this.signUp}>
                  Зареєструватися
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    );
  }
}

export default SignUpPage;
