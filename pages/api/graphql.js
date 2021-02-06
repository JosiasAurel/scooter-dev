const { ApolloServer, gql } = require("apollo-server")

const mongoose = require('mongoose')

const ScootSchema = new mongoose.Schema({
	content: String,
	title: String
})

const Scoot = mongoose.model('Scoot', ScootSchema)


const MONGO_DB_URI = "mongodb+srv://scooter:scooter500@cluster0.7kwvr.mongodb.net/scooter?retryWrites=true&w=majority"

const typeDefs = gql`

type Scoot {
	content: String!
	title: String!
	id: ID!
}

type Query {
	scoots: [Scoot]
}


type Mutation {
	scoot(content: String!, title: String!): Scoot!
}

`

// init db 
mongoose.connect(MONGO_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// get db object
const db = mongoose.connection

var dbRes = []

const resolvers = {
	Query: {
		scoots: () => {

		try {
		Scoot.find((err, scoots) => {
			
			scoots.forEach(scoot => {
			
				 dbRes.push({
					title: scoot.title,
					content: scoot.content,
					id: scoot._id
				})
			})
		})
		setTimeout(2000, () => "not")
		return dbRes
		} finally {
			dbRes = []
		}
		}
	},
	Mutation: {
		scoot: (parent, args) => {
			
			let scoot = new Scoot({
				title: args.title,
				content: args.content
			})
			scoot.save((err, scoot) => {
				if (err) console.log(err)
				return scoot
			})
			return {
				title: args.title,
				content: args.content
			}
		}
	}
}


/*
export const config = {
	api: {
		bodyParser: false
	}
}
*/
const server = new ApolloServer({playground: true, typeDefs, resolvers });

/*
exports.handler = server.createHandler({path: "/api/graphql"});

*/

/*
export default server.createHandler({
  path: '/api/graphql',
});

export const config = {
  api: {
    bodyParser: false,
  },
};
*/

server.listen().then(({url}) => {
	console.log(`[working]: ${url}`)
})


