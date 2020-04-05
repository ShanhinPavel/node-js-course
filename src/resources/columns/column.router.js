const router = require('express').Router();
// const Column = require('./column.model');
const columnService = require('./column.service');

router.route('/').get(async (req, res) => {
  const columns = await columnService.getAll();

  res.json(columns);
});

module.exports = router;
