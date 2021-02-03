
const { gql } = require("apollo-server")

const typeDefs = gql`

type Scoot {
	content: String!
}

type Query {
	scoots: [Scoot]
}

type Mutation {
	post(content: String!): Scoot!
}

`

module.exports = { typeDefs }
