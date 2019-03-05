const Health = require('../server/models/health');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');

chai.use(chaiHttp);
describe('Health', () => {
  beforeEach(done => {
    Health.remove({}, () => {
      done();
    });
  });
});

describe('Get Health', () => {
  it('It should respond without error', done => {
    chai
      .request(server)
      .get('/api/health')
      .end((err, res) => {
        res.should.have.status(200);
      });
    done();
  });
});
