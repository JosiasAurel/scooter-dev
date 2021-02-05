const { ApolloServer, gql } = require("apollo-server")

const { typeDefs } = require("./typeDefs")
const { resolvers } = require("./resolvers")

const server = new ApolloServer({cors: true, typeDefs, resolvers})

server.listen().then(({url}) => {
	console.log(`[working]: ${url}`)
})
