import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    budgets: [Budget]
  }

  type Budget {
    id: ID!
    name: String!
    amount: Float!
    user: User!
  }

  type Query {
    budgets: [Budget]
    users: [User]
  }

  type Mutation {
    createBudget(name: String!, amount: Float!): Budget
  }
`;
