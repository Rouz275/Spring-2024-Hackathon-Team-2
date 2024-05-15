const path = require("path");
require("dotenv").config();
const {
  PROD_DATABASE_URL = "postgres://wgqqvvdc:2-W8dDk6kG4UZHsZOjWb5Ec2zFBTytNJ@stampy.db.elephantsql.com/wgqqvvdc",
  DEV_DATABASE_URL = "postgres://ghtpnves:wKOkGAu311nc4o75x7gb0IQc_0PoqMGu@stampy.db.elephantsql.com/ghtpnves",
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DEV_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: PROD_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
