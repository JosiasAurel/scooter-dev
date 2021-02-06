const { ApolloServer, gql } = require("apollo-server-micro")

const { typeDefs } = require("./typeDefs")
const { resolvers } = require("./resolvers")



export const config = {
	api: {
		bodyParser: false
	}
}

const server = new ApolloServer({playground: true, typeDefs, resolvers });

module.exports = server.createHandler({path: "/api/graphql"});

/*
server.listen().then(({url}) => {
	console.log(`[working]: ${url}`)
})
*/
