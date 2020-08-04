export interface User {
  first_name: string;
  last_name: string;
  id: string;
}

interface ListMeta {
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
}

export interface UsersApi {
  _meta: ListMeta;
  result: User[];
}

export interface PostsApi {
  _meta: ListMeta;
  result: Post[];
}

export interface Post {
  id: string;
  user_id: string;
  title: string;
  body: string;
}
