const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const buildingSchema = new Schema({
   adress: { type: String, required: true },
   promoter: { type: String, required: true },
   dateOfoperation: { type: Date, required: true },
   budgetDisposed: { type: Number, required: true },
   dueDate: { type: Date, required: true },
   image: { type: String, required: true },
   residents: [{
       type: Schema.Types.ObjectId,
       ref: "Resident",
   }],
   suggestions: [{
    type: Schema.Types.ObjectId,
    ref: "Suggestion",
   }],
   payements: [{
    type: Schema.Types.ObjectId,
    ref: "Payement",
   }],
   propertyManager: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true
},
   }, {
   timestamps: true
});

const Building = mongoose.model("Building", buildingSchema);


module.exports = Building;