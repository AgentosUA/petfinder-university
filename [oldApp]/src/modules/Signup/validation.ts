import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  login: Yup.string()
    .required('Обов\'язкове поле'),
  password: Yup.string()
    .required('Обов\'язкове поле'),
});

export { SignupSchema }