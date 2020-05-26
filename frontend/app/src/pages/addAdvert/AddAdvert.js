import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import Wrapper from '../../shared/components/Wrapper/Wrapper';
import Section from '../../shared/components/Section/Section';
import Button from '../../shared/components/UI/Button/Button';
import Form from '../../shared/components/UI/Form/Form';
import Modal from '../../shared/components/UI/Modal/Modal';
// import ImagePicker from '../../shared/components/UI/ImagePicker/ImagePicker';
import '../../shared/components/UI/ImagePicker/ImagePicker.css';
import 'react-datepicker/dist/react-datepicker.css';

const AddAdvert = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;

    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    } else {
      return;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = (e) => {
    filePickerRef.current.click();
  };

  //

  const [startDate, setStartDate] = useState(null);

  const [type, setType] = useState('cat');
  const [name, setName] = useState(null);
  const [gender, setGender] = useState(null);
  const [status, setStatus] = useState('escaped');

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const setInputDataToState = (e) => {
    const dataType = e.target.name;
    switch (dataType) {
      case 'type':
        setType(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'gender':
        setGender(e.target.value);
        break;
      case 'status':
        setStatus(e.target.value);
        break;
      default:
        break;
    }
  };

  // const pickedHandler = (e) => {};

  const PostNewAdvert = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('type', type);
    formData.append('gender', gender);
    formData.append('name', name);
    formData.append('status', status);
    formData.append('image', file);
    try {
      const res = await axios.post(
        'http://localhost:5000/advert/new',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization':
              'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
          },
        }
      );
      if (res.status === 201) {
        setStatus('');
        setStatus('');
        setModalMessage('Оголошення успішно створено!');
        setShowModal(true);

        return;
      } else {
        setModalMessage('Не всі поля були задані!');
        setShowModal(true);
        return;
      }
    } catch (error) {
      console.log(error);
      setModalMessage('Сталася помилка на сервері!');
      setShowModal(true);
    }
  };

  return (
    <main className="container">
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        title={modalMessage}
        subtitle="h3"
        text={'test'}
      ></Modal>
      <Wrapper>
        <Section title="Створити оголошення" className="search-container" flex>
          <Form className="login-form">
            <label htmlFor="name">Ім'я тваринки</label>
            <input
              type="text"
              name="name"
              placeholder="Ім'я"
              required
              onChange={setInputDataToState}
            />
            <label htmlFor="type">Тип тваринки</label>
            <select name="type" id="" onChange={setInputDataToState}>
              <option value="cat">Коти</option>
              <option value="dog">Собаки</option>
              <option value="other">Інші</option>
            </select>
            <label htmlFor="gender">Стать</label>
            <select name="gender" id="" onChange={setInputDataToState}>
              <option value="he">Він</option>
              <option value="she">Вона</option>
            </select>
            <label htmlFor="status">Статус</label>
            <select name="status" id="" onChange={setInputDataToState}>
              <option value="escaped">Зниклі</option>
              <option value="founded">Знайдені</option>
            </select>
            <label htmlFor="date">Дата зникнення/знаходження</label>
            <DatePicker
              selected={startDate}
              placeholderText="Коли зник / знайшли"
              dateFormat="dd/MM/yyyy"
              htmlFor="date"
              isClearable
              strictParsing
              todayButton="Сьогодні"
              onChange={(date) => setStartDate(date)}
            />

            <label htmlFor="image">Зображення</label>
            <div className="image-picker">
              <input
                id="formImage"
                ref={filePickerRef}
                type="file"
                required
                accept=".jpg,.png,.jpeg,.gif"
                onChange={pickedHandler}
                style={{ display: 'none' }}
              />
              {previewUrl && <img src={previewUrl} alt="Preview" />}
              <button
                className="button-second"
                onClick={pickImageHandler}
                type="button"
              >
                {!previewUrl && 'Оберіть зображення'}
                {previewUrl && 'Змінити зображення'}
              </button>
            </div>
            <Button
              styles="main"
              type="submit"
              text="Створити оголошення"
              submit={PostNewAdvert}
            />
          </Form>
        </Section>
      </Wrapper>
    </main>
  );
};

export default AddAdvert;
