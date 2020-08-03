import axios from 'axios';

export interface IgetUser {
  page?: number;
  name?: string;
}

const baseUrl = 'https://gorest.co.in/public-api';
const token = 'bcWsUE6X9JC1_-lqd_lAk_UQhGz1teLYSThk';

const usersUrl = `${baseUrl}/users?_format=json&access-token=${token}`;

export function getUsers({ page, name }: IgetUser) {
  const pageParam = page ? `&page=${page}` : '';
  const nameParam = name ? `&first_name=${name}` : '';
  return axios.get(`${usersUrl}${pageParam}${nameParam}`);
}
