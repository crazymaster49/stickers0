const express = require('express');
const router = express.Router();
const queries = require('../db/queries.js')

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Id does not work'));

}

function validSticker(sticker) {
  const hasTitle = typeof sticker.Title == 'string' && sticker.Title.trim() != '';
  const hasUrl = typeof sticker.url == 'string' && sticker.url.trim() != '';
  const hasDescription = typeof sticker.Description == 'string' && sticker.Description.trim() != '';
  const hasRating = !isNaN(sticker.Rating);
  return hasUrl && hasTitle && hasDescription && hasRating;
}
router.get('/', (req, res) => {
  queries.getAll().then(stickers => {
    res.json(stickers);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(sticker => {
    if (sticker) {
      res.json(sticker)
    } else {
      next();
    }
  })
});

router.post('/', (req, res, next) => {
  if (validSticker(req.body)) {
    queries.create(req.body).then(stickers => {
      res.json(stickers[0]);
    });
  } else {
    next(new Error('Invalid sticker'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if (validSticker(req.body)) {
    queries.update(req.params.id, req.body).then(stickers => {
      res.json(stickers);
    });
  } else {
    next(new Error('Invalid sticker'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      gone: true
    });
  });
});
module.exports = router;
