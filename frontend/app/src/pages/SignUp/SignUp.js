import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Section from '../../shared/components/Section/Section';
import Button from '../../shared/components/UI/Button/Button';
import Form from '../../shared/components/UI/Form/Form';
import Modal from '../../shared/components/UI/Modal/Modal';

const SignUp = (props) => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRePassword] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

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

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const PostSignUp = async (e) => {
    e.preventDefault();
    try {
      if (password !== repassword) {
        setModalMessage('Паролі не співпадають!');
        setShowModal(true);
        return;
      }

      const data = JSON.stringify({
        email,
        password,
        name,
      });
      const res = await axios.post('http://localhost:5000/signup', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 201) {
        setModalMessage('Профіль успішно створено!');
        setShowModal(true);
        return;
      }

      if (res.status === 401) {
        setModalMessage('Такий користувач вже існує!');
        setShowModal(true);
        return;
      }
    } catch (error) {
      // console.log(error);
      setModalMessage('Такий користувач вже існує!');
      setShowModal(true);
    }

    const data = JSON.stringify({
      name,
      email,
      password,
    });
  };

  return (
    <main className="container">
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        title={modalMessage}
        subtitle="h3"
        text="Lol"
      ></Modal>
      <Wrapper>
        <Section title="Реєстрація" className="search-container" flex>
          <Form className="login-form">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              onChange={setInputDataToState}
            />
            <label htmlFor="name">Ім'я</label>
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
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
            <label htmlFor="repassword">Повторіть пароль</label>
            <input
              type="password"
              name="repassword"
              placeholder="Повторіть пароль"
              required
              onChange={setInputDataToState}
            />

            <NavLink to="/login" className="ask">
              Вже маєте акаунт?
            </NavLink>
            <Button
              styles="main"
              type="submit"
              text="Зареєструватися"
              submit={PostSignUp}
            />
          </Form>
        </Section>
      </Wrapper>
    </main>
  );
};

export default SignUp;
