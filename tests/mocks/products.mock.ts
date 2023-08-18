import { ProductInputtableTypes } from '../../src/database/models/product.model';
import { Product } from '../../src/types/Product';

const emptyNameProduct: ProductInputtableTypes = {
  name: '',
  price: '30 peças de ouro',
  orderId: 4
}

const shortNameProduct: ProductInputtableTypes = {
  name: 'Ma',
  price: '30 peças de ouro',
  orderId: 4
}

const emptyPriceProduct: ProductInputtableTypes = {
  name: 'Martelo de Thor',
  price: '',
  orderId: 4
}

const shortPriceProduct: ProductInputtableTypes = {
  name: 'Martelo de Thor',
  price: '30',
  orderId: 4
}

const validProduct: ProductInputtableTypes = {
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
}

const validProductFromDB: Product = {
  id: 4,
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
}

const getProductsMockFromDB: Product[] = [
  {
    id: 1,
    name: 'Excalibur',
    price: '10 peças de ouro',
    orderId: 1
  },
  {
    id: 2,
    name: 'Espada Justiceira',
    price: '20 peças de ouro',
    orderId: 1
  },
  {
    id: 3,
    name: 'Lira de Orfeu',
    price: '1 peça de ouro',
    orderId: 2
  },
  {
    id: 4,
    name: 'Armadura de Aquiles',
    price: '1 peça de ouro',
    orderId: 2
  },
  {
    id: 5,
    name: 'Harpa de Dagda',
    price: '15 peças de ouro',
    orderId: 3
  }
];

export default {
  emptyNameProduct,
  shortNameProduct,
  emptyPriceProduct,
  shortPriceProduct,
  validProduct,
  validProductFromDB,
  getProductsMockFromDB
}