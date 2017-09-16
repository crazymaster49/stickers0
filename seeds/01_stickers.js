
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sticker').del()
    .then(function () {
      const stickers = [{
        Title: "Happy Man",
        Description: "Happy Man says happy",
        Rating: 9,
        url: "http://www.happyfeet.com/"
      },
      {
        Title: "Books",
        Description: "We speak knowlegde man!",
        Rating: 9,
        url: "http://www.tailopez.com/"
      },
      {
        Title: "Pegasus",
        Description: "Yup",
        Rating: 9,
        url: "http://www.pegasusautohouse.com/"
      }]
      return knex('sticker').insert(stickers);
    });
};
