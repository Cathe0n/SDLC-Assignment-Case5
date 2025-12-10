import { findUserByName } from "../services/userService.js";

export function find(req, res) {
  const { name } = req.query;
  try {
    const rows = findUserByName(name);
    res.json({ results: rows });
  } catch (err) {
    res.status(500).json({ error: "Query failed" });
  }
}
