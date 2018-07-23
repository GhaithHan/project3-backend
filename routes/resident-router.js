const express = require("express");

const Resident = require("../models/resident-model.js");

const router = express.Router();


router.get("/residents", (req, res, next) => {
    Resident
      .find()
      .then((residentResults) => {
          res.json(residentResults);
      })
      .catch((err) => {
          next(err);
      });
 });

router.post("/residents", (req, res, next) => {
    const { firstName, lastName, email } = req.body;

    Resident.create({ firstName, lastName, email })
     .then((residentDoc) => {
         res.json(residentDoc);
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
    const { id } = req.params;
  
    Resident.findByIdAndRemove(id)
      .then((residentDoc) => {
        res.json(residentDoc);
      })
      .catch((err) => {
        next(err);
      });
  });



module.exports = router;