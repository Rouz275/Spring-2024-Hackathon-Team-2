const data = require("./Stock_Data")

exports.seed = function(knex) {
  return knex('Stocks').del()
    .then(function () {
      return knex('Stocks').insert(data);
    });
};