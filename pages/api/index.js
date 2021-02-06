const { ApolloServer, gql } = require("apollo-server-micro")

const { typeDefs } = require("./typeDefs")
const { resolvers } = require("./resolvers")

const server = new ApolloServer({playground: true, typeDefs, resolvers})

export default server.createHandler({
	path: '/api'
})

/*
server.listen().then(({url}) => {
	console.log(`[working]: ${url}`)
})
*/
