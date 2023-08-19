import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ordersMock from '../../mocks/orders.mock';
import OrderModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Lista todas as orders com sucesso', async function () {
    const mockFindAllReturn = ordersMock.getOrdersFromDB.map((order) => OrderModel.build(order));
    mockFindAllReturn.forEach((order, i) => order.dataValues.productIds = ordersMock.orderProductIds[i]);

    sinon.stub(OrderModel, 'findAll').resolves(mockFindAllReturn);

    const httpResponse = await chai.request(app).get('/orders');
    

    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(ordersMock.allOrders);
  });
});
