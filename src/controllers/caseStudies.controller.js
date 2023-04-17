const Sections = require("../models/sections.model");
const Sequelize = require("sequelize");
const db = require("../models");
const CaseStudies = require("../models/caseStudy.model");

exports.addCaseStudy = async (req, res) => {
  try {
    var title = req.body.title;

    const caseStudy = await CaseStudies.create({
      title,
    });

    await caseStudy.save();

    console.log(caseStudy.id);

    res.status(200).send({
      status: "success",
      data: caseStudy,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getAllCaseStudies = async (req, res) => {
  try {
    const caseStudy = await CaseStudies.findAll({
      attributes: ["title"],
    });

    res.status(200).send({
      status: "success",
      data: caseStudy,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudies.findAll({
      attributes: ["title"],
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({
      status: "success",
      data: caseStudy,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateCaseStudy = async (req, res) => {
  const { title } = req.body;
  console.log(req.body);
  try {
    await CaseStudies.update(
      {
        title
      },
      { where: { id: req.params.id } }
    );

    const caseStudy = await CaseStudies.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).send({
      status: "success",
      data: caseStudy,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.deleteCaseStudy = async (req, res) => {
  try {
    if (req.params.id != 1) {
      await CaseStudies.destroy({ where: { id: req.params.id } });

      res.status(200).send({
        status: "Deleted Successfully",
      });
    } else {
      res.status(400).send({
        status: "Bad Request",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
