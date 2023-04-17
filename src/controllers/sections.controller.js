const Sections = require("../models/sections.model");
const Sequelize = require("sequelize");
const db = require("../models");

exports.index = async (req, res) => {
  try {
    const options = {
      attributes: [
        "id",
        "email",
        "phone",
        "country",
        "isActive",
        [
          Sequelize.fn(
            "concat",
            Sequelize.col("firstName"),
            " ",
            Sequelize.col("lastName")
          ),
          "name",
        ],
      ],
      offset: (req.query.page - 1) * 5,
      limit: 5,
      order: [["id", "DESC"]],
      where: {
        role: 1,
      },
    };

    const users = await User.findAndCountAll(options);
    res.status(200).send({
      status: "success",
      data: {
        users: users.rows,
        pages: Math.ceil(users.count / 5),
      },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.addSection = async (req, res) => {
  try {
    const { title, description, image, caseStudyId } = req.body;
    console.log(req.body);

    const section = await Sections.create({
      title,
      description,
      image,
      caseStudyId,
    });

    await section.save();
    res.status(200).send({
        status: "success",
        data: section,
      });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getSections = async (req, res) => {
  try {
    const section = await Sections.findAll({
      attributes: ["id", "title", "description", "image", "caseStudyId"],
      where: {
        caseStudyId: req.params.id,
      },
    });

    res.status(200).send({
      status: "success",
      data: section,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.updateSection = async (req, res) => {
    const {  title, description, image, caseStudyId  } =
      req.body;
    console.log(req.body);
    try {
      await Sections.update(
        {
            title, description, image, caseStudyId 
        },
        { where: { id: req.params.id } }
      );
  
      const section = await Sections.findOne({
        where: {
          id: req.params.id,
        },
      });
  
      res.status(200).send({
        status: "success",
        data: section,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  exports.deleteSection = async (req, res) => {
    try {
      if (req.params.id != 1) {
        await Sections.destroy(
          { where: { id: req.params.id } }
        );
  
        res.status(200).send({
          status: "Deleted Successfully"
        });
      } else {
        res.status(400).send({
          status: "Bad Request"
        });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
