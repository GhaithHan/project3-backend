const express = require("express");
const Resident = require("../models/resident-model.js");
const Building = require("../models/building-model.js");

const router = express.Router();


router.get("/residents/:id", (req, res, next) => {
    const id = req.params.id;
    Building
      .findById(id)
      .populate("residents")
      .then((buildingResults) => {
          res.json(buildingResults.residents);
      })
      .catch((err) => {
          next(err);
      });
 });

router.post("/residents", (req, res, next) => {
    const { firstName, lastName, email } = req.body.residentInfo;
    const buildingId = req.body.buildingId;
    console.log( buildingId );

    Resident.create({ firstName, lastName, email })
     .then((residentDoc) => {
         Building.findByIdAndUpdate(
            buildingId, 
            { $push: { residents: residentDoc._id }})
         .then((buildingDoc) => {

             res.json({residentDoc, buildingDoc} );
         })
     })
     .catch((err) => {
         next(err);
     });
});

router.put("/resident/:id", (req, res, next) => {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body; 

    Resident.findByIdAndUpdate(
        id,
        { $set: { firstName, lastName, email } },
        { runValidators: true, new: true }
    )
    .then((residentDoc) => {
        res.json(residentDoc);
    })
    .catch((err) => {
        next(err);
    });
})

router.delete("/resident/:id", (req, res, next) => {
    const id = req.params.id;
    console.log( 'id------------------' );    
    console.log( id );
  
    Resident.findOneAndRemove({_id :id})
      .then((residentDoc) => {
        console.log( 'residentDoc--------------------' );          
        console.log( residentDoc );
        res.json(residentDoc);
      })
      .catch((err) => {
        next(err);
      });
  });



module.exports = router;