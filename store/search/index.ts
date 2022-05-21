import { authService, postsService } from '@api';
import cookieCutter from 'cookie-cutter';
import { SearchParams } from '@types';
import { makeAutoObservable } from 'mobx';

class SearchStore {
  posts: [];
  searchParams: SearchParams;

  constructor() {
    makeAutoObservable(this);
  }

  search = async ({
    currentPage,
    type,
    status,
    city,
    date,
    gender
  }: SearchParams) => {
    try {
      const [data, statusCode] = await postsService.searchPost({
        // currentPage,
        type,
        status,
        city,
        // date,
        gender
      });

      if (statusCode === 404) return;
      return data;
    } catch (error) {
      // TODO: Popup with error
    }
  };
}

export const searchStore = new SearchStore();
