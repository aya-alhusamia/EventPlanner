module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Event", {
    organizer: {
      type: DataTypes.STRING,
      len: [0, 20],
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      validate: { notContains: "event" },
    },

    email: {
      type: DataTypes.STRING,
      validateValue: { isEmail: true, allowNull: false },
    },
    image: {
      type: DataTypes.STRING,
      validateValue: { allowNull: false },
    },
    numOfSeats: {
      type: DataTypes.INTEGER,
      validValue: { min: 0 },
    },
    bookedSeats: {
      type: DataTypes.INTEGER,
      max: Event.numOfSeats,
    },
    startDate: {
      type: DataTypes.DATE,
      isAfter: "2021-06-20",
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};
