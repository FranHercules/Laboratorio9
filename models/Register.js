const Moongose = require("mongoose");
const ResgisterSchema = Moongose.Schema({
    carnet: String,
    schedule: String,
    isLate: Boolean,

});

module.exports = Moongose.model("Register", ResgisterSchema)