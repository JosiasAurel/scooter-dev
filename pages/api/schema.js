
const mongoose = require('mongoose')

const ScootSchema = new mongoose.Schema({
	content: String,
	title: String
})

const Scoot = mongoose.model('Scoot', ScootSchema)

module.exports = { Scoot }
