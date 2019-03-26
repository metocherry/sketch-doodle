const people = [
  {
    name: "Nicolas",
    age: 18,
    gender: "male"
  },
  {
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    name: "Japan Guy",
    age: 18,
    gender: "male"
  },
  {
    name: "Daal",
    age: 18,
    gender: "male"
  },
  {
    name: "JD",
    age: 18,
    gender: "male"
  },
  {
    name: "moondaddi",
    age: 18,
    gedner: "male"
  },
  {
    name: "flvnn",
    age: 18,
    gender: "male"
  }
];

const resolvers = {
  Query: {
    people: () => people
  }
};

export default resolvers;
