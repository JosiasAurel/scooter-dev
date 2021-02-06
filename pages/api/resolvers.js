const mongoose = require('mongoose')
const MongoClient = require("mongodb").MongoClient

//const data = require("./sampleData")

const { Scoot } = require("./schema")

const { MONGO_DB_URI, DB_NAME } = require('./config')


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

module.exports = { resolvers }
