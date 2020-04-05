const usersRepo = require('./user.memory.repository');
const tasksRepo = require('../tasks/task.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const getUserById = async userId => {
  const users = await usersRepo.getAll();

  return users.find(user => +userId === user.id) || "User couldn't be found";
};

const deleteUser = async userId => {
  const users = await usersRepo.getAll();
  const tasks = await tasksRepo.getAll();

  tasks.forEach(task => {
    if (+userId === task.userId) {
      task.userId = null;
    }
  });

  const foundIndex = users.findIndex(user => +userId === user.id);

  return foundIndex !== -1 ? users.splice(foundIndex, 1) : undefined;
};

const addUser = async user => {
  const users = await usersRepo.getAll();
  const newUser = new User({ ...user });

  users.push(newUser);

  return newUser;
};

const updateUser = async (userId, userUpdate) => {
  const users = await usersRepo.getAll();

  const foundIndex = users.findIndex(user => +userId === user.id);

  if (foundIndex !== -1) {
    users[foundIndex] = { ...users[foundIndex], ...userUpdate };

    return users[foundIndex];
  }

  return undefined;
};

module.exports = { getAll, getUserById, deleteUser, addUser, updateUser };
