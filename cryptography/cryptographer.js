import crypto from "crypto";
import fs from "fs";
import path from "path";

const datapath = path.resolve("./cryptography/algorithm/data.json");
const rawdata = fs.readFileSync(datapath);
const data = JSON.parse(rawdata);

const iv = Buffer.alloc(16, 0);

function encrypt(text, password, salt) {
  const key = crypto.scryptSync(password, salt, 32);
  const cipher = crypto.createCipheriv(data.algorithm, key, iv);

  let encrypted = cipher.update(text);

  encrypted += cipher.final(data.type);

  return encrypted.toString();
}

function decrypt(text, password, salt) {
  const key = crypto.scryptSync(password, salt, 32);
  const decipher = crypto.createDecipheriv(data.algorithm, key, iv);

  let decrypted = decipher.update(text, data.type);

  decrypted += decipher.final();

  return decrypted.toString();
}

export default { encrypt, decrypt };