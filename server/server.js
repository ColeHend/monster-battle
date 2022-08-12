const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();
const dbConnect = require("./database/database");
const { Register, Login, addMonster } = require("./controllers/putControl");
const auth = require("./database/auth");
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  dbConnect();
  // database needing
  app.put("/api/register", Register);
  app.put("/api/login", Login);
  app.post("/api/addMonster", auth, addMonster);
});
