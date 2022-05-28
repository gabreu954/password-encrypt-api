import db from "../sequelize.js";
import { DataTypes } from "sequelize";

const Usuario = db.define(
  "usuarios",
  {
    email: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false,
  }
);

Usuario.removeAttribute("id");

export default Usuario;


