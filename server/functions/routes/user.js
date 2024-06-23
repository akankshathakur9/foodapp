const router = require("express").Router();

router.get("/", (req, res) => {
  return res.send("Inside the user router");
});

router.get("/jwtVerification", async (req, res) => {
  res.send( "jwt verification");
});

module.exports = router;