const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

class CaseStudies extends Model {
  //Functions comes here
}

CaseStudies.init(
  {
    title: {
      //Honda , Suzuki
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CaseStudies",
  }
);

module.exports = CaseStudies;
