module.exports = {
  Query: {
    pets(_, { input }, { models }) {
      return models.Pet.findMany(input);
    },
    pet(_, { id }, { models }) {
      return models.Pet.findOne({ id });
    },
    user(_, __, { models }) {
      return models.User.findOne();
    },
  },
  Mutation: {
    addPet(_, { input }, { models }) {
      const pet = models.Pet.create({ ...input });
      return pet;
    },
  },
  //Handling Relationships between user and pets
  //resolving user.pets seperatly here
  User: {
    pets(user, _, { models }) {
      console.log(user.id)
      return models.Pet.findMany({ user: user.id });
    },
  },
  Pet:{
    owner(pet,_,{models}){
      return models.User.findOne({id:pet.id})
    }
  }
};
