import express from "express";
import cors from "cors";
import cryptographer from "./cryptography/cryptographer.js";
import UsuarioRepository from "./data/models/usuario.js";
import ChaveRepository from "./data/models/chave.js";
import { v4 as uuidv4 } from "uuid";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const route = "/crypto";

app.route(`${route}/encrypt`).get((req, res) => {
  const password = uuidv4();
  const salt = uuidv4();

  var senhaEncrypt = cryptographer.encrypt(req.body.senha, password, salt);

  UsuarioRepository.create({
    email: req.body.email,
    senha: senhaEncrypt,
  });

  ChaveRepository.create({
    email: req.body.email,
    salt: salt,
    password: password,
  });

  res.status(201).send();
});

// app.route(`${route}/decrypt`).get((req, res) => {
//   var decrypted = cryptographer.decrypt(req.params.senha);
//   res.status(200).send(`${decrypted}`);
// });

app.listen("3000", () => {
  console.log("Servidor aberto");
});
