import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Lista todos os produtos com sucesso', async function () {
    const mockFindAllReturn = productsMock.getProductsMockFromDB.map((product) => ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productsMock.getProductsMockFromDB);

  });
});
