import { ProductInputtableTypes } from "../../src/database/models/product.model";

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

export default {
  emptyNameProduct,
  shortNameProduct,
  emptyPriceProduct,
  shortPriceProduct,
  validProduct
}