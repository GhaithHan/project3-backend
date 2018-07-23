const express = require("express");

const Suggestion = require("../models/suggestion-model.js");

const router = express.Router();

router.post("/suggestion", (req, res, next) => {
    const { complainant, description, category, NumberOfAppartement } = req.body;

    Suggestion.create({ complainant, description, category, NumberOfAppartement })
     .then((suggestionDoc) => {
         res.json(suggestionDoc);
     })
     .catch((err) => {
         next(err);
     });
});


router.put("/suggestion/:id", (req, res, next) => {
    const { id } = req.params;
    const { complainant, description, category, NumberOfAppartement } = req.body; 

    Resident.findByIdAndUpdate(
        id,
        { $set: { firstName, lastName, email, appartement } },
        { runValidators: true, new: true }
    )
    .then((residentDoc) => {
        res.json(residentDoc);
    })
    .catch((err) => {
        next(err);
    });
})

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