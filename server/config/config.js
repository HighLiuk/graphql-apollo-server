const path = require("path")

module.exports = {
  development: {
    username: "root",
    password: null,
    storage: path.join(__dirname, "..", "data", "db.sqlite"),
    host: "127.0.0.1",
    dialect: "sqlite",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
}
