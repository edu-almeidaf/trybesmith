import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsService from '../../../src/services/products.service';
import productsController from '../../../src/controllers/products.controller';
import productsMock from '../../mocks/products.mock';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('#create', function () {
    it('É possível cadastrar um produto com sucesso', async function () {
      req.body = productsMock.validProduct;
      sinon.stub(productsService, 'createProduct').resolves({
        status: 'SUCCESSFUL',
        data: productsMock.validProductFromDB
      });

      await productsController.createProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(productsMock.validProductFromDB);
    });

    it('Não é possível cadastrar um produto sem o campo "name"', async function () {
      req.body = productsMock.emptyNameProduct;
      sinon.stub(productsService, 'createProduct').resolves({
        status: 'INVALID_DATA',
        data: { message: '"name" is required' }
      });

      await productsController.createProduct(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    });
  });
});
