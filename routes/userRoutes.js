import express from "express";
import { find } from "../controllers/userController.js";
const router = express.Router();

router.get("/find", find); // /users/find?name=...
export default router;
