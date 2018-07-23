const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const appartementSchema = new Schema({
    resident: {
        type: Schema.Types.ObjectId,
        ref: "Resident",
    }, 
    surfaceArea: { type: Number },
    isExpensePaid: { type: Boolean }
    }, {
    timestamps: true
});

const Appartement = mongoose.model("Appartement", appartementSchema);

module.exports = Appartement;