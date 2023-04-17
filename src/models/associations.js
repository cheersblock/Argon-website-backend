const User = require("./user.model");
const ForgotPasswordToken = require("./forgotPasswordToken.model");
const Sections = require("./sections.model");
const CaseStudies = require("./caseStudy.model");

User.hasOne(ForgotPasswordToken, {
  onDelete: "CASCADE",
  foreignKey: "userId",
});

CaseStudies.hasMany(Sections, {
  onDelete: "CASCADE",
  foreignKey: "caseStudyId",
  onUpdate: "CASCADE",
});

Sections.belongsTo(CaseStudies, {
  onDelete: "CASCADE",
  foreignKey: "caseStudyId",
  onUpdate: "CASCADE",
});
