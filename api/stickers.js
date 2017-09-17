const express = require('express');
const router = express.Router();
const queries = require('../db/queries.js')
router.get('/', function(req, res) {
  queries.getAll().then(sticker => {
    res.json(sticker);
  });
});
module.exports = router;
// router.get('/', (req, res) => {
//   queries.getAll().then(stickers => {
//     res.json(stickers);
//   });
// });
