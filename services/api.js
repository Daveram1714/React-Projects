import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6969'
});

export const getTasks = () => {
  return api.get('/TaskIndex');
};

export const createTask = (task) => {
  return api.post('/CreateTask', task);
};

