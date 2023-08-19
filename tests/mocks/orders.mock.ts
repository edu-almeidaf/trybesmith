const orderProductIds = [
  [{ id: 1}, { id: 2}],
  [{ id: 3}, { id: 4}],
  [{ id: 5}]
]

const getOrdersFromDB = [
	{
    id: 1,
    userId: 1,
	},
	{
    id: 2,
    userId: 3,
  },
	{
    id: 3,
    userId: 2,
	}
];

const allOrders = [
	{
    id: 1,
    userId: 1,
    productIds: [1, 2],
	},
	{
    id: 2,
    userId: 3,
    productIds: [3, 4],
  },
	{
    id: 3,
    userId: 2,
    productIds: [5],
	}
];

export default {
  getOrdersFromDB,
  orderProductIds,
  allOrders
}