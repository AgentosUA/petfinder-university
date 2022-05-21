import { authService } from '@api';
import { makeAutoObservable } from 'mobx';
import Cookie from 'mobx-cookie';

class Auth {
  tokenCookie = new Cookie('token');
  expiresInCookie = new Cookie('token');
  isLoggedIn = false;
  constructor() {
    this.checkAuth();
    makeAutoObservable(this);
  }

  checkAuth = () => {
    // const expiresIn = this.expiresInCookie.value;
    // const currentTime = +new Date() / 1000;
    // const timeLeft = (Number(expiresIn) - currentTime) * 1000;
    // if (timeLeft > 0) {
    //   this.isLoggedIn = true;
    // } else {
    //   this.isLoggedIn = false;
    // }
  };

  login = async ({ email, password, redirect = '/', setErrors }) => {
    try {
      const [{ token, expiresIn }] = await authService.login(email, password);
      this.tokenCookie.set(token);
      this.expiresInCookie.set(expiresIn);
      this.isLoggedIn = true;
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 400 || error?.response?.status === 404) {
        setErrors({ email: 'Невірна пошта або пароль!' });
        return;
      }
      setErrors({ email: 'Сталась критична помилка, спробуйте ще раз!' });
    }
  };

  logout = () => {
    this.tokenCookie.remove();
    this.expiresInCookie.remove();
    this.isLoggedIn = false;
  };
}

export const auth = new Auth();
