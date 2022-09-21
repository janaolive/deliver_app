module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Delivery App Admin',
        role: 'administrator',
        email: 'adm@deliveryapp.com',
        password: 'a4c86edecc5aee06eff8fdeda69e0d04',
        // senha: --adm2@21!!--
      },
      {
        username: 'Fulana Pereira',
        role: 'seller',
        email: 'fulana@deliveryapp.com',
        password: 'c28d2b0881bf46457a853e0b07531c6',
        // senha: fulana@123
      },
      {
        username: 'Cliente Zé Birita',
        role: 'customer',
        email: 'zebirita@email.comm',
        password: '1c37466c159755ce1fa181bd247cb925'
          // senha: $#zebirita#$
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
