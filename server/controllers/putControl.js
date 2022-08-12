const { database } = require("../database");
const addMonster = async (req, res) =>
  await database.addMonster(req.body.monster);
module.exports = { addMonster };
