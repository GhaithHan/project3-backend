const express = require("express");

const Suggestion = require("../models/suggestion-model.js");

const Building = require("../models/building-model.js");

const router = express.Router();


router.get("/suggestions/:id", (req, res, next) => {
    const id = req.params.id;
    Building
      .findById(id)
      .populate({ path: "suggestions", populate: { path: "complainant" } })
      .then((buildingResults) => {
          res.json(buildingResults.suggestions);
      })
      .catch((err) => {
          next(err);
      });
 });

router.post("/suggestions", (req, res, next) => {
    const { description, category, complainant } = req.body.suggestionInfo;
    const buildingId = req.body.buildingId;
    console.log( buildingId );

    Suggestion.create({ description, category, complainant })
     .then((suggestionDoc) => {
         Building.findByIdAndUpdate(
            buildingId, 
            { $push: { suggestions: suggestionDoc._id }})
         .then((buildingDoc) => {

             res.json({suggestionDoc, buildingDoc} );
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

router.delete("/suggestion/:id", (req, res, next) => {
    const { id } = req.params;
  
    Suggestion.findByIdAndRemove(id)
      .then((suggestionDoc) => {
        res.json(suggestionDoc);
      })
      .catch((err) => {
        next(err);
      });
  });



module.exports = router;