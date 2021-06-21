const express = require("express");
const db = require("./db/models");
const eventtRouter = require("./routes/events");
const app = express();
app.use(express.json());
app.use("/events", eventtRouter);

const PORT = 8000;
db.sequelize.sync();
app.listen(PORT);
