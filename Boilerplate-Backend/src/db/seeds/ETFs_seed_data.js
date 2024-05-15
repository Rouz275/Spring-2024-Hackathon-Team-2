const data = require("./ETF_Data")

exports.seed = function(knex) {
  return knex('ETFs').del()
    .then(function () {
      return knex('ETFs').insert(data);
    });
};