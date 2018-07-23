const express = require("express");

const Building = require("../models/building-model.js");

const router = express.Router();

router.get("/buildings", (req, res, next) => {
   Building
     .find({ propertyManager: req.user._id })
     .then((buildingResults) => {
         res.json(buildingResults);
     })
     .catch((err) => {
         next(err);
     });
});

router.get("building/:id", (req, res, next) => {
    const { id } = req.params;

  Building.findById(id)
    .then((buildingDoc) => {
      if (!buildingDoc) {
        next();
        return;
      }
      res.json(buildingDoc);
    })
    .catch((err) => {
      next(err);
    });
});

router.put("building/:id", (req, res, next) => {
    const { id } = req.params;
    const { adress, promoter, dateOfoperation, budgetDisposed, dueDate } = req.body; 

    Building.findByIdAndUpdate(
        id,
        { $set: { adress, promoter, dateOfoperation, budgetDisposed, dueDate } },
        { runValidators: true, new: true }
    )
    .then((buildingDoc) => {
        res.json(buildingDoc);
    })
    .catch((err) => {
        next(err);
    });
})

router.delete("/building/:id", (req, res, next) => {
    const { id } = req.params;
  
    Building.findByIdAndRemove(id)
      .then((buildingDoc) => {
        res.json(buildingDoc);
      })
      .catch((err) => {
        next(err);
      });
  });


router.post("/buildings", (req, res, next) => {
    const {  adress, promoter, dateOfoperation, budgetDisposed, dueDate, image } = req.body;

    Building.create({ propertyManager: req.user._id, adress, dueDate, budgetDisposed, dateOfoperation, promoter, image })
     .then((BuildingDoc) => {
         res.json(BuildingDoc);
     })
     .catch((err) => {
         next(err);
     });
});

module.exports = router;

