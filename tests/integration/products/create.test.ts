import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it ('É possível cadastrar um produto com sucesso', async function() {
    const requestBody = productsMock.validProduct;
    const mockCreateReturn = ProductModel.build(productsMock.validProduct);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const httpResponse = await chai.request(app).post('/products').send(requestBody);

    expect(httpResponse.status).to.equal(201);
  })
});
