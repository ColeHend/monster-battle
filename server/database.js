require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const url = process.env.DATA_STRING;
// @ts-ignore
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const monsters = client.db("test").collection("monsters");
const database = {
  connect: (callback) => {
    client.connect((err) => {
      callback();
      client.close();
    });
  },
  addMonster: (object) => monsters.insertOne(object),
};
module.exports = { database };
