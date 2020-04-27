import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Section from '../../shared/components/Section/Section';
import Button from '../../shared/components/UI/Button/Button';
import Form from '../../shared/components/UI/Form/Form';

import { AuthContext } from '../../shared/context/auth-context';

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

  const auth = useContext(AuthContext);

  const PostLogin = async (e) => {
    e.preventDefault();

    try {
      const data = JSON.stringify({
        email,
        password,
      });
      const res = await axios.post('http://localhost:5000/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status === 200) {
        auth.login(res.data.token, res.data.userId);
      } else {
        console.log('not 200!');
      }
    } catch (error) {
      console.log('Error from TryCatch: ' + error);
    }
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
            <Button
              styles="main"
              type="submit"
              text="Увійти"
              submit={PostLogin}
            />
          </Form>
        </Section>
      </Wrapper>
    </main>
  );
};

export default Login;
