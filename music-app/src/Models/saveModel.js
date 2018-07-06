let mongoose = require("mongoose");

const schema = require('../Schemas/saveSchema');

module.exports = mongoose.model("saves", schema);