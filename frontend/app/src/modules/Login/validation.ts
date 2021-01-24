import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  login: Yup.string()
  .required('Обов\'язкове поле'),
  password: Yup.string()
    .required('Обов\'язкове поле'),
});

export { LoginSchema }