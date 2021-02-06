
const mongoose = require('mongoose')

const MONGO_DB_URI = "mongodb+srv://scooter:scooter500@cluster0.7kwvr.mongodb.net/scooter?retryWrites=true&w=majority"

const ScootSchema = new mongoose.Schema({
        content: String,
        title: String
})

const Scoot = mongoose.model('Scoot', ScootSchema)


module.exports = (req, res) => {
	Scoot.find((err, data) => {
		res.send(data)
	})
}
