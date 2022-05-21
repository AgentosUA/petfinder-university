import { http } from './http';
import cookieCutter from 'cookie-cutter';

class PostsService {
  public constructor() {}

  public searchPost({
    currentPage = '',
    type = '',
    status = '',
    city = '',
    date = '',
    gender = ''
  }) {
    return http({
      method: 'GET',
      // url: `/posts?page=${currentPage}&type=${type}&status=${status}&city=${city}&date=${date}&gender=${gender}`
      url: `/posts`
    }) as any;
  }

  public getPostById(id: string) {
    return http({
      method: 'GET',
      url: `/posts/${id}`
    }) as any;
  }
}

const postsService = new PostsService();
export { postsService };
