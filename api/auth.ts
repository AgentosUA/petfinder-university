import { http } from "./http";

class AuthService {
  public constructor() { }

  public login(email: string, password: string) {
    return http({
      method: 'POST',
      url: '/auth/login',
      data: {
        email,
        password
      }
    }) as any;
  }
}


const authService = new AuthService();
export { authService };
