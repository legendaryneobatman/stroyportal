const express = require('express');
const router = express.Router();
const db = require('../db.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  const { search } = req.query
  res.json(db.filter(({ title }) => title.toLowerCase().indexOf(search.toLowerCase()) !== -1))
});

module.exports = router;
