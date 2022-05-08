import { authService } from '@api';
import cookieCutter from 'cookie-cutter';
import { makeAutoObservable } from 'mobx';

class Auth {
  isLoggedIn: boolean = false;

  constructor() {
    // const expiresIn = Number(cookieCutter.get('expiresIn'));
    const expiresIn = 99999999999999;
    const currentTime = +new Date() / 1000;
    const timeLeft = (expiresIn - currentTime) * 1000;
    this.isLoggedIn = (isNaN(timeLeft) || timeLeft) <= 0;

    makeAutoObservable(this);
  }

  login = async ({ email, password, redirect = '/', setErrors }) => {
    try {
      const [{ token, expiresIn }] = await authService.login(email, password);
      cookieCutter.set('token', token, {
        path: '/'
      });
      cookieCutter.set('expiresIn', expiresIn, {
        path: '/'
      });

      if (redirect) {
        // Router.push(redirect);
      }

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
    cookieCutter.set('token', '', { expires: new Date(0) });
    cookieCutter.set('expiresIn', '', { expires: new Date(0) });
    this.isLoggedIn = false;
  };
}

export const auth = new Auth();
