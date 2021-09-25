const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('CRUD routes for build something', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('adds new quotes to table', () => {
    return request(app)
      .post('/api/v1/quotes')
      .send(['Fish, for sport only, not for meat. Fish meat is practically a vegetable.'])
      .then((res) => {
        expect(res.body).toEqual([{
          id: 2,
          quote: expect.any(String)
        }]);
      });
  });

  it('get a random quote', () => {
    return request(app)
      .get('/api/v1/quotes')
      .then((res) => {
        expect(res.body).toEqual([{ 
          quote: expect.any(String)
        }]);
      });
  });

  it.skip('show quotes depending on the number', () => {
    return request(app)
      .get('/api/v1/quotes/5')
      .then((res) => {
        // expect(createMessage).toHaveBeenCalledTimes(1);
        expect(res.body).toEqual([{}]);
      });
  });

  it.skip('', () => {
    return request(app)
      .patch('')
      .send({})
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  it.skip('', () => {
    return request(app)
      .delete('')
      .send({})
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });
  afterAll(() => {
    pool.end();
  });
});
