const express = require("express");
const eventControler = require("../controllers/eventController");
const router = express.Router();

//  Create products route
router.post("/", eventControler.createEvent);

//Delete events route
router.delete("/:eventID", eventControler.deletEvent);

//Update events route
router.put("/:eventID", eventControler.updateEvents);

// Pruduct list
router.get("/", eventControler.eventList);

// Delaile of events
router.get("/:eventID", eventControler.detaileEvent);

module.exports = router;
