module.exports = {
  Query: {
    pets(_, _, { models }) {
      return models.Pet.findMany();
    },
  },
};
