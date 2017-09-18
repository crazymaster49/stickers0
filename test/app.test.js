const knex = require('../db/knex.js');
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app.js');
const fixtures = require('./fixtures');

describe('CRUD Stickers', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => {
        return knex.seed.run();
      }).then(() => done());
  });
  it('Lists Records Bitch', function(done) {
    request(app)
      .get('/api/v1/stickers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(fixtures.stickers);
        // console.log(response.body)
        done();
      });
  })

  it('Show one record by id', (done) => {
    request(app)
      .get('/api/v1/stickers/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        expect(response.body).to.deep.equal(fixtures.stickers[0]);
        done();
      });
  });

  it('Creates a record', (done) => {
    request(app)
      .post('/api/v1/stickers')
      .send(fixtures.sticker)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('object');
        fixtures.sticker.id = response.body.id;
        expect(response.body).to.deep.equal(fixtures.sticker);
        done();
      });
  });
});
