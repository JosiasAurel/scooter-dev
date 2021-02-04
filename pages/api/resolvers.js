const mongoose = require('mongoose')

const data = require("./sampleData")

const { Scoot } = require("./schema")

const { MONGO_DB_URI } = require('./config')

// init db 
mongoose.connect(MONGO_DB_URI, {useNewUrlParser: true})

// get db object
const db = mongoose.connection

const resolvers = {
	Query: {
		scoots: () => data
	},
	Mutation: {
		post: (parent, args) => {
			
		}
	}
}

module.exports = { resolvers }
