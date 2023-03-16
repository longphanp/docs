import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(
  `
    type User {name: String, id: String}
    type Query {
      me: User
      random: Int!,
      listRandom: [Int]
      getMessage: String
    }

    type Mutation {
      setMessage(message: String) : String
    }
  `
);

const schema2 = buildSchema(
  `
    type Dice {
      index: Int,
      value: Int
    }

    type RandomDice {
      roll(numRolls: Int!): [Dice]
    }

    type Query {
      me2: Int
      rollDice(numDice: Int!, numSides: Int!): [Int],
      getDice(numSides: Int!): RandomDice
    }
  `
);

class RandomDice {
  constructor(numSides) {
    this.numSides = numSides;
  }

  roll({ numRolls }) {
    return Array.from(Array(numRolls)).map((_, index) => ({
      index: index,
      value: Math.floor(Math.random() * this.numSides) + 1,
    }));
  }
}

const app = express();

let mess = "";

const root = {
  me: () => ({
    name: "alo",
    id: "123214",
  }),

  random: () => Math.floor(Math.random() * 100),

  listRandom: () =>
    Array.from(Array(5)).map(() => Math.floor(Math.random() * 100)),

  setMessage: ({ message }) => {
    mess = message;
    return mess;
  },

  getMessage: () => mess,
};

const root2 = {
  me2: () => 2,
  rollDice: (args) => {
    const { numDice, numSides } = args;
    return Array.from(Array(numDice)).map(
      () => Math.floor(Math.random() * numSides) + 1
    );
  },

  getDice: ({ numSides }) => {
    throw new Error("hohoo");
    //return new RandomDice(numSides);
  },
};

app.use(
  "/graphql",
  graphqlHTTP({ schema: schema, rootValue: root, graphiql: true })
);

app.use(
  "/graphql2",
  graphqlHTTP({ schema: schema2, rootValue: root2, graphiql: true })
);

app.listen("3000", () => {
  console.log("Listen at port 3000");
});
