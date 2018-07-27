const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const payementSchema = new Schema({
    
    payer: {
        type: Schema.Types.ObjectId,
        ref: "Resident",
    },
    situation: { type: String, required: true },
    }, {
    timestamps: true
});

const Payement = mongoose.model("Payement", payementSchema);

module.exports = Payement;