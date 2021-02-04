
const { gql } = require("apollo-server")

const typeDefs = gql`

type Scoot {
	content: String!,
	title: String!
}

type Query {
	scoots: [Scoot]
	scoot: Scoot
}


type Mutation {
	post(content: String!, title: String!): Scoot!
}

`

module.exports = { typeDefs }
