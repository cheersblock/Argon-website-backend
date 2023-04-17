const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class Sections extends Model {
  //Functions comes here
}

Sections.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    caseStudyId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Sections",
  }
);

module.exports = Sections;
