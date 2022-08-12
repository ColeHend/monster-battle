const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
const { database } = require("./database");
const { addMonster } = require("./controllers/putControl");
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  database.connect(() => {
    console.log("Connected to database!");
    app.post("/api/addMonster", addMonster);
  });
});
