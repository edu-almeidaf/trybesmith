import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import usersMock from '../../mocks/users.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it ('Ao não receber um username, retorne um erro', async function () {
    const requestBody = usersMock.emptyUsername;

    const responseData = await chai.request(app).post('/login').send(requestBody);

    expect(responseData.status).to.equal(400);
    expect(responseData.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it ('Ao não receber uma senha, retorne um erro', async function () {
    const requestBody = usersMock.emptyPassword;

    const responseData = await chai.request(app).post('/login').send(requestBody);

    expect(responseData.status).to.equal(400);
    expect(responseData.body).to.be.deep.equal({ message: '"username" and "password" are required' });
  });

  it ('Ao receber um e-mail inexistente, retorne um erro', async function () {
    const requestBody = usersMock.wrongUser;
    sinon.stub(UserModel, 'findOne').resolves(null);

    const responseData = await chai.request(app).post('/login').send(requestBody);

    expect(responseData.status).to.equal(401);
    expect(responseData.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it ('Ao receber um e-mail existente e uma senha errada, retorne um erro', async function () {
    const requestBody = usersMock.userWithWrongPassword;
    const mockFindOneReturn = UserModel.build(usersMock.existingUser)
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const responseData = await chai.request(app).post('/login').send(requestBody);

    expect(responseData.status).to.equal(401);
    expect(responseData.body).to.be.deep.equal({ message: 'Username or password invalid' });
  });

  it ('Ao receber um e-mail e uma senha válida, retorne um token de login', async function () {
    const requestBody = usersMock.validLoginBody;
    const mockFindOneReturn = UserModel.build(usersMock.existingUser)
    sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

    const responseData = await chai.request(app).post('/login').send(requestBody);

    expect(responseData.status).to.equal(200);
    expect(responseData.body).to.have.key('token');
  });
});
