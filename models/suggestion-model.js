const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
    description: { type: String, required: true },
    category: { type: String, required: true },
    complainant: {
        type: Schema.Types.ObjectId,
        ref: "Resident",
    },
    NumberOfAppartement: {
        type: Schema.Types.ObjectId,
        ref: "Appartement",
    },
    isDone: { type: Boolean }
    }, {
    timestamps: true

});

const Suggestion = mongoose.model("Suggestion", suggestionSchema);

module.exports = Suggestion;

