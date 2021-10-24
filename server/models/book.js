"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate({ Author }) {
      this.belongsTo(Author, {
        foreignKey: "authorId",
        as: "author",
      })
    }

    toJSON() {
      return { ...this.get() }
    }
  }

  Book.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      genre: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      authorId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Book",
      tableName: "books",
    }
  )

  return Book
}
