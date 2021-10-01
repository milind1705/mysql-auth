require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || 3000;

//const loginRouter = require('../modules/auth/loginRoute')
let app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const db = require("../models/index");
db.sequelize.sync();

require('../modules/auth/loginRoute')(app)
// app.use('/', (req, res) => {
//     return res.send("hello world")
// })
app.listen(port, () => {
  console.log(`app is listning on ${port}`);
});
