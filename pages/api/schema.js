
const mongoose = require('mongoose')

const Scoot = new mongoose.Schema({
	content: String,
	title: String
})

module.exports = { Scoot }
