const Thing = require("../../database/models/things");

const getAllThings = async (req, res) => {
  const things = await Thing.find();
  res.json(things);
};

module.exports = {
  getAllThings,
};
