const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    // map user fields to exclude secret fields like "password"
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    await usersService.addUser(req.body);

    res.json('User has been successfully created');
  })
  .put(async (req, res) => {
    const updatedUser = await usersService.updateUser(
      req.query['user_id'],
      req.body
    );

    res.json(
      updatedUser ? 'User has been successfully updated' : 'User was not found'
    );
  });

router
  .route('/:user_id')
  .get(async (req, res) => {
    const user = await usersService.getUserById(req.params['user_id']);

    res.json(user);
  })
  .delete(async (req, res) => {
    const deletedUser = await usersService.deleteUser(req.params['user_id']);

    res.json(deletedUser || "User couldn't found");
  });

module.exports = router;
