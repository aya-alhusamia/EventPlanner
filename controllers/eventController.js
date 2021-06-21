const { Event, sequelize } = require("../db/models");
const Sequelize = require("sequelize");
exports.createEvent = async (req, res) => {
  try {
    const nweEvent = await Event.bulkCreate(req.body);
    res.status(201).json(nweEvent);
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Server Error" });
  }
};

exports.deletEvent = async (req, res) => {
  try {
    // const findEvents = await Event.findByPk(req.params.eventID);
    if (Event) {
      await Event.destroy({ where: { id: req.body.ids.split(",") } });
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Server Error" });
  }
};
exports.updateEvents = async (req, res) => {
  try {
    const findEvents = await Event.findByPk(req.params.id);
    if (findEvents) {
      findEvents.update(req.body);
      res.status(201).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Server Error" });
  }
};
const Op = Sequelize.Op;
exports.eventList = async (req, res) => {
  try {
    let eve;
    function isEmpty(obj) {
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) return false;
      }
      return JSON.stringify(obj) === JSON.stringify({});
    }

    if (!isEmpty(req.body)) {
      eve = await Event.findAll({
        attributes: ["id", "name", "image"],
        order: [["startDate", "DESC"]],
      });
    } else {
      console.log("hiii", req.body);
      eve = await Event.findAll({
        attributes: ["id", "name", "image"],
        where: {
          startDate: {
            [Op.gte]: req.body,
          },
        },

        order: [["startDate", "DESC"]],
      });
    }

    res.json(eve);
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Server Error" });
  }
};
exports.detaileEvent = async (req, res) => {
  console.log("asdfghj", req.params.eventID);
  try {
    const findEvents = await Event.findByPk(req.params.eventID);

    if (findEvents) {
      res.status(200).json(findEvents);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Server Error" });
  }
};
exports.eventFullyBooked = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: {
        bookedSeats: {
          [Op.eq]: sequelize.col("numOfSeats"),
        },
      },
    });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message ?? "Server Error" });
  }
};
