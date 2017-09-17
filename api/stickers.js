const express = require('express');
const router = express.Router();
const queries = require('../db/queries.js')
router.get('/', function(req, res) {
  queries.getAll().then(function stickers() {
    res.json(stickers);
  });
});
module.exports = router;
