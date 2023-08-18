import { expect } from 'chai';
import sinon from 'sinon';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import productsService from '../../../src/services/products.service';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('#createProduct', function () {
    it('É possível cadastrar um produto com sucesso', async function () {
      const mockCreateReturn = ProductModel.build(productsMock.validProductFromDB);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

      const serviceResponse = await productsService.createProduct(productsMock.validProduct);

      expect(serviceResponse.status).to.eq('SUCCESSFUL');
      expect(serviceResponse.data).to.deep.eq(productsMock.validProductFromDB);
    });

    it('Não é possível cadastrar um produto sem o nome', async function () {
      const mockCreateReturn = ProductModel.build(productsMock.validProductFromDB);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

      const serviceResponse = await productsService.createProduct(productsMock.emptyNameProduct);
      
      expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).to.deep.eq({ message: '"name" is required' });
    });

    it('Não é possível cadastrar um produto com o nome inferior a 3 caracteres', async function () {
      const mockCreateReturn = ProductModel.build(productsMock.validProductFromDB);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

      const serviceResponse = await productsService.createProduct(productsMock.shortNameProduct);
      
      expect(serviceResponse.status).to.eq('UNPROCESSABLE_ENTITY');
      expect(serviceResponse.data).to.deep.eq({ message: '"name" length must be at least 3 characters long' });
    });

    it('Não é possível cadastrar um produto sem o preço', async function () {
      const mockCreateReturn = ProductModel.build(productsMock.validProductFromDB);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

      const serviceResponse = await productsService.createProduct(productsMock.emptyPriceProduct);
      
      expect(serviceResponse.status).to.eq('INVALID_DATA');
      expect(serviceResponse.data).to.deep.eq({ message: '"price" is required' });
    });

    it('Não é possível cadastrar um produto com o preço inferior a 3 caracteres', async function () {
      const mockCreateReturn = ProductModel.build(productsMock.validProductFromDB);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

      const serviceResponse = await productsService.createProduct(productsMock.shortPriceProduct);
      
      expect(serviceResponse.status).to.eq('UNPROCESSABLE_ENTITY');
      expect(serviceResponse.data).to.deep.eq({ message: '"price" length must be at least 3 characters long' });
    });
  });

  describe('#getProducts', function () {
    // it('Lista todos os produtos com sucesso', async function () {
    //   const mockFindAllReturn = productsMock.getProductsMockFromDB.map((product) => (
    //     ProductModel.build(product)
    //   ))
    //   sinon.stub(ProductModel, 'findAll').resolves(mockFindAllReturn);

    //   const serviceResponse = await productsService.createProduct(productsMock.validProduct);

    //   expect(serviceResponse.status).to.eq('SUCCESSFUL');
    //   expect(serviceResponse.data).to.deep.eq(productsMock.validProductFromDB);
    // });
  });
});
