export type SearchParams = {
  type: 'all' | 'dog' | 'cat' | 'other';
  gender: 'all' | 'he' | 'she';
  status: 'all' | 'founded' | 'escaped';
  city: 'all' | string;
  date: 'all' | Date | string;
  currentPage?: number;
  page?: '';
};
