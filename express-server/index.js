const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

const port = 3001;

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const routes = require("./settings/routes");
const urlencodedParser = express.urlencoded({ extended: false });

const pool = mysql.createPool({
  host: "sql7.freemysqlhosting.net",
  user: "sql7595528",
  password: "JHGwZJt4Iz",
  database: "sql7595528",
  port: 3306,
});

app.get("/", function (req, res) {
  pool.query("SELECT * FROM users", function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

app.post("/create", urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);
  const id = req.body.id;
  const name = req.body.name;
  pool.query(
    "INSERT INTO users (id, name) VALUES (?,?)",
    [id, name],
    function (err, data) {
      if (err) return console.log(err);
      res.send(data);
    }
  );
});

app.delete("/delete/:id", function (req, res) {
  const id = +req.params.id;
  pool.query("DELETE FROM users WHERE id=?", [id], function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});

// routes(app);
