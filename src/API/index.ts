import axios from 'axios';

export interface IgetUser {
  page?: number;
  name?: string;
}

export interface IgetPosts {
  userId: string;
  page?: number;
  title?: string;
}

const baseUrl = 'https://gorest.co.in/public-api';
const token = 'bcWsUE6X9JC1_-lqd_lAk_UQhGz1teLYSThk';

const usersUrl = `${baseUrl}/users?access-token=${token}`;

const userUrl = (userId: number) =>
  `${baseUrl}/users/${userId}?access-token=${token}`;

const postsUrl = (userId: string) =>
  `${baseUrl}/posts?access-token=${token}&user_id=${userId}`;

export function getUsers({ page, name }: IgetUser) {
  const pageParam = page ? `&page=${page}` : '';
  const nameParam = name ? `&first_name=${name}` : '';
  return axios.get(`${usersUrl}${pageParam}${nameParam}`);
}

export function getPosts({ userId, page, title }: IgetPosts) {
  const pageParam = page ? `&page=${page}` : '';
  const titleParam = title ? `&title=${title}` : '';
  return axios.get(`${postsUrl(userId)}${pageParam}${titleParam}`);
}

export function getUser(userId: number) {
  return axios.get(userUrl(userId));
}

export function addUser(name: string, email: string) {
  const fullName = name.split(' ');
  return axios.post(usersUrl, {
    first_name: fullName[0],
    last_name: fullName[1] ? fullName[1] : 'some last name',
    gender: 'male',
    email,
  });
}

export function deleteUser(userId: number) {
  return axios.delete(userUrl(userId));
}

export function editUser(userId: number, name: string, email: string) {
  const fullName = name.split(' ');
  return axios.patch(userUrl(userId), {
    first_name: fullName[0],
    last_name: fullName[1],
    email,
  });
}
