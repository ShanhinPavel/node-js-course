const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development

  return [
    {
      id: 1,
      title: 'Task1',
      columns: 1
    },
    {
      id: 2,
      title: 'Task2',
      columns: 2
    },
    {
      id: 3,
      title: 'Task3',
      columns: 3
    }
  ];
};

module.exports = { getAll };
