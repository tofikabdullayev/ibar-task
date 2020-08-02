export interface User {
  first_name: string;
  last_name: string;
  id: string;
}

export interface UsersApi {
  _meta: {
    totalCount: number;
    pageCount: number;
    currentPage: number;
    perPage: number;
  };
  result: User[];
}
