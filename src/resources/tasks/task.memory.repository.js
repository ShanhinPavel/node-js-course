const tasks = [
  {
    id: 1,
    title: 'Task1',
    order: 1,
    description: 'This is description of first task',
    userId: 1,
    boardId: 1,
    columnId: 1
  },
  {
    id: 2,
    title: 'Task2',
    order: 2,
    description: 'This is description of second task',
    userId: 2,
    boardId: 1,
    columnId: 1
  },
  {
    id: 3,
    title: 'Task3',
    order: 3,
    description: 'This is description of third task',
    userId: 3,
    boardId: 1,
    columnId: 1
  }
];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return tasks;
};

module.exports = { getAll };
