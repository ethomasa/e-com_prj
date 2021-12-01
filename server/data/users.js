const bcrypt = require('bcryptjs');

const users = [
    {
      name: 'Admin User',
      email: 'admin@test.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true,
    },
    {
      name: 'Mathew Joe',
      email: 'john@test.com',
      password: bcrypt.hashSync('123456', 10),
    },
    {
      name: 'Jane Smoth',
      email: 'Jane@etest.com',
      password: bcrypt.hashSync('123456', 10),
    },
  ]

  module.exports = users