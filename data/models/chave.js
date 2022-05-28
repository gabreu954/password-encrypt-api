import db from "../sequelize.js";
import { DataTypes } from "sequelize";
import Usuario from "./usuario.js";

const Chave = db.define(
  "chaves",
  {
    salt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
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

Chave.removeAttribute("id");

Chave.belongsTo(Usuario, { foreignKey: "email" });

export default Chave;
