
const mongoose = require('mongoose')

const MONGO_DB_URI = "mongodb+srv://scooter:scooter500@cluster0.7kwvr.mongodb.net/scooter?retryWrites=true&w=majority"

const ScootSchema = new mongoose.Schema({
        content: String,
        title: String
})

const Scoot = mongoose.model('Scoot', ScootSchema)

let scoots 
Scoot.find((err, data) => {
	scoots = data
})

module.exports = (req, res) => {
	res.json({
		scoots: scoots
	})
}
