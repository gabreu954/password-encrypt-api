import { Sequelize } from "sequelize";
import path from "path";

const dbpath = path.resolve("./data/users.sqlite3");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbpath,
});

sequelize.authenticate().then(() => {
  console.info("Database connected");
});

export default sequelize;
