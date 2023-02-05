const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "sql7.freemysqlhosting.net",
  user: "sql7595528",
  password: "JHGwZJt4Iz",
  database: "sql7595528",
  port: 3306,
});

/* conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
}); */

/* conn.connect(function(err) {
  if (err) throw err;
  let sql = "SHOW TABLES";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
}); */

/* conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id SMALLINT UNSIGNED, name VARCHAR(255))";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
}); */

/* conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (id, name) VALUES (3, 'Evgeny')";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}); */

/* conn.connect(function (err) {
  if (err) throw err;
  conn.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}); */

/* conn.connect(function(err) {
  if (err) throw err;
  var sql = `DELETE FROM users WHERE id IS NULL`;
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted");
  });
}); */

/* conn.connect(function(err) {
  if (err) throw err;
  let sql = "ALTER TABLE Test ADD id TEXT";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
}); */

/* conn.connect(function(err) {
  if (err) throw err;
  let sql = "ALTER TABLE Test ADD name TEXT";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
}); */

/* conn.connect(function(err) {
  if (err) throw err;
  let sql = "INSERT INTO Test (id, name) VALUES ('2', 'Olga')";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
}); */

/* conn.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE Test";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
}); */

module.exports = conn;
