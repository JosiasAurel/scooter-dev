const data = require("./sampleData")

const resolvers = {
	Query: {
		scoots: () => data
	}
}

module.exports = { resolvers }
