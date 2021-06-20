module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Event", {
        organizer: {
        type: DataTypes.STRING,
        len: [0, 20],
        unique: true
      },
       name :{
        type: DataTypes.STRING,
        validate: 
         { notContains : "event"}
       },

      email: {
        type: DataTypes.STRING,
        validateValue: {isEmail: true, 
        allowNull:true}

      }, 
      image: {
        type: DataTypes.STRING,
        validateValue:{allowNull: true}
      },
      numOfSeats: {
        type: DataTypes.INTEGER,
        validValue:{ min: 1}

      },
      bookedSeats : {
        type: DataTypes.INTEGER,
        validValue: {max: 5}
        
      },
      startDate: {
        type: DataTypes.DATE,
       isAfter: "2021-06-20",
      },
      endDate: {
        type: DataTypes.DATE

      }
    });
  }
