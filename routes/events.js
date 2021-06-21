const express = require("express");
const eventControler = require("../controllers/eventController");
const router = express.Router();

//  Create events route
router.get("/fullyBookedEvent/", eventControler.eventFullyBooked);
router.post("/", eventControler.createEvent);

//Delete events route
router.delete("/", eventControler.deletEvent);

//Update events route
router.put("/:eventID", eventControler.updateEvents);

// Event list
router.get("/", eventControler.eventList);

// Delaile of events

router.get("/:eventID", eventControler.detaileEvent);

module.exports = router;
