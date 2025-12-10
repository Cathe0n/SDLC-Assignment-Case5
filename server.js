import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);

app.listen(3005, () => console.log("Case5 server listening on 3005"));
