import axios from 'axios';

const potatojoayo = axios.create({
  baseURL: 'https://potatojoayo.com',
});

export default potatojoayo;
