import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Section from '../../shared/components/Section/Section';
import Button from '../../shared/components/UI/Button/Button';
import Form from '../../shared/components/UI/Form/Form';

import '../../shared/components/UI/Button/Button.css';

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRePassword] = useState(null);

  const setInputDataToState = (e) => {
    const dataType = e.target.name;
    switch (dataType) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'repassword':
        setRePassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const PostSignUp = async (e) => {
    e.preventDefault();
    console.log('Logged in!');
    const data = JSON.stringify({
      email,
      password,
    });
    const res = await axios.post('http://localhost:5000/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
  };

  return (
    <main className="container">
      <Wrapper>
        <Section title="Вхід" className="search-container" flex>
          <Form className="login-form">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              onChange={setInputDataToState}
            />
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              required
              onChange={setInputDataToState}
            />
            <NavLink to="/forget" className="ask">
              Забули пароль?
            </NavLink>
            <Button styles="main" type="submit" text="Вхід" submit={PostSignUp} />
          </Form>
        </Section>
      </Wrapper>
    </main>
  );
};

export default Login;
