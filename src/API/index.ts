import axios from 'axios';

const baseUrl = 'https://gorest.co.in/public-api';
const token = 'bcWsUE6X9JC1_-lqd_lAk_UQhGz1teLYSThk';

export function getUsers() {
  return axios.get(`${baseUrl}/users?_format=json&access-token=${token}`);
}
