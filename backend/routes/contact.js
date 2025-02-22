const express = require("express");
const {PushMessage} = require("../controllers/contact");

const router = express.Router();

router.post("/push", PushMessage);

module.exports = router;
