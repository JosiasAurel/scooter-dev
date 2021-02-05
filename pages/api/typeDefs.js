
const { gql } = require("apollo-server")

const typeDefs = gql`

type Scoot {
	content: String
	title: String
	id: ID
}

type Query {
	scoots: [Scoot]
}


type Mutation {
	scoot(content: String!, title: String!): Scoot!
}

`

module.exports = { typeDefs }
