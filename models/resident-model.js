const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const residentSchema = new Schema({
    firstName : { type: String, required: true, unique: true },
    lastName: { type: String },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^.+@.+\..+$/
    },
    appartement: {
        type: Schema.Types.ObjectId,
        ref: "Appartement",
    },
    }, {
    timestamps: true
});

const Resident = mongoose.model("Resident", residentSchema);

module.exports = Resident;




