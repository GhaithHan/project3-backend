const express = require("express");

const Payement = require("../models/payement-model.js");

const Building = require("../models/building-model.js");

const router = express.Router();


router.get("/payements/:id", (req, res, next) => {
    const id = req.params.id;
    Building
      .findById(id)
      .populate({ path: "payements", populate: { path: "payer" } })
      .then((buildingResults) => {
          res.json(buildingResults.payements);
      })
      .catch((err) => {
          next(err);
      });
 });

router.post("/payements", (req, res, next) => {
    const { payer, situation } = req.body.payementInfo;
    const buildingId = req.body.buildingId;
    console.log( buildingId );

    Payement.create({ payer, situation })
     .then((payementDoc) => {
         Building.findByIdAndUpdate(
            buildingId, 
            { $push: { payements: payementDoc._id }})
         .then((buildingDoc) => {

             res.json({payementDoc, buildingDoc} );
         })
     })
     .catch((err) => {
         next(err);
     });
});

// router.put("/suggestion/:id", (req, res, next) => {
//     const { id } = req.params;
//     const { firstName, lastName, email } = req.body; 

//     Resident.findByIdAndUpdate(
//         id,
//         { $set: { firstName, lastName, email } },
//         { runValidators: true, new: true }
//     )
//     .then((residentDoc) => {
//         res.json(residentDoc);
//     })
//     .catch((err) => {
//         next(err);
//     });
// })

router.delete("/payement/:id", (req, res, next) => {
    const { id } = req.params;
  
    Payement.findByIdAndRemove(id)
      .then((payementDoc) => {
        res.json(payementDoc);
      })
      .catch((err) => {
        next(err);
      });
  });



module.exports = router;