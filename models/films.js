const mongoose = require("mongoose");

const filmSchema = mongoose.Schema({
    title: String,
    duration: Number,
})

const Film = mongoose.model("films", filmSchema)

module.exports = Film