const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return [
    {
      id: 1,
      title: 'Task1',
      order: 1
    },
    {
      id: 2,
      title: 'Task2',
      order: 2
    },
    {
      id: 3,
      title: 'Task3',
      order: 3
    }
  ];
};

module.exports = { getAll };
