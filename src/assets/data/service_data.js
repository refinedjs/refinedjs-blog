module.exports = {
  services: [
    {
      serviceName: 'Users',
      paths: [
        '/users',
        '/users/:id'
      ],
      schema: {},
      methods: {
        get: true,
        post: true,
        patch: true,
        put: true,
        delete: true
      }
    },
    {
      serviceName: 'Products',
      paths: [
        '/products',
        '/products/:id'
      ],
      schema: {},
      methods: {
        get: true,
        post: true,
        patch: true,
        put: true,
        delete: true
      }
    }
  ]
};