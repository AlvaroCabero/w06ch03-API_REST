const express = require("express");
const { getAllThings } = require("../controller/things");

const router = express.Router();

router.get("/", getAllThings);

// router.get("/pet/:id", getPetById);

// router.post(
//   "/new",
//   (req, res, next) => {
//     console.log("¡Ojo! Están creando un pet.");
//     next();
//   },
//   createPet
// );

module.exports = router;
