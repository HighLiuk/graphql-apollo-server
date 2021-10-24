"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate({ Book }) {
      this.hasMany(Book, {
        foreignKey: "authorId",
        as: "books",
      })
    }

    toJSON() {
      return { ...this.get() }
    }
  }

  Author.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      age: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Author",
      tableName: "authors",
    }
  )

  return Author
}
