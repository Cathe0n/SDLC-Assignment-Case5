import { dbExecute } from "../models/dbModel.js";

export function findUserByName(name) {
  const sql = `SELECT * FROM users WHERE name = '${name}'`;
  return dbExecute(sql);
}
