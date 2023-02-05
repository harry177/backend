"use strict";
const response = require("./../response");
const database = require("./../settings/database");

exports.users = (request, result) => {
  database.query =
    ("SELECT",
    (error, rows, fields) => {
      if (error) {
        console.log(error);
      } else {
        response.status(rows, result);
      }
    });
};
