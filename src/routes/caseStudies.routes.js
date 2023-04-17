const express = require("express");
const {
  index,
  addSection,
  update,
  deleteUser,
  getSections,
} = require("../controllers/sections.controller");
const {
  getSingle,
  getAll,
  addCaseStudy,
  getAllCaseStudies,
  getCaseStudy,
} = require("./../controllers/caseStudies.controller");

const caseStudyRouter = express.Router();

//Token will be check here using middleware named 'authJwt' before executing code of following route methods

caseStudyRouter.route("/").get(getAllCaseStudies);
caseStudyRouter.route("/:id").get(getCaseStudy);
caseStudyRouter.route("/addCaseStudy").post(addCaseStudy);

caseStudyRouter.route("/addSection").post(addSection);
caseStudyRouter.route("/getAllSections/:id").get(getSections);

// userRouter.route("/").get(index);
// userRouter.route("/:id").get(getSingle);
// userRouter.route("/update/:id").post(update);
// userRouter.route("/delete/:id").get(deleteUser);
// userRouter.route("/changeStatus/:id").get(changeStatus);

module.exports = caseStudyRouter;
