import { http } from "./http";
import cookieCutter from 'cookie-cutter';

class ProfileService {
  public constructor() { }

  public profile() {
    return http({
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${cookieCutter.get('token')}`,
      },
      url: '/users/profile',
    }) as any;
  }

  public deletePost(id) {
    return http({
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${cookieCutter.get('token')}`,
      },
      url: `/posts/${id}`,
    }) as any;
  }
}


const profileService = new ProfileService();
export { profileService };
