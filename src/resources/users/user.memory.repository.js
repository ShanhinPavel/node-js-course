const users = [
  { id: 1, name: 'Ivan', login: 'ivan', password: 12345 },
  { id: 2, name: 'Petr', login: 'petr', password: 12363 },
  { id: 3, name: 'Andrey', login: 'andrey', password: 12365 }
];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return users;
};

module.exports = { getAll };
