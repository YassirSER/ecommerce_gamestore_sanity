export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderId',
      title: 'OrderId',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'city',
      title: 'city',
      type: 'string',
    },
    {
      name: 'email',
      title: 'city',
      type: 'string',
    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
    },
  ],
}
