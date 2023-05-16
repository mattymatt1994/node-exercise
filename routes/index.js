import express from "express";
// TODO: import router from users.route
import usersRouter from "./users.route.js";

const router = express.Router();

router.use("/users", usersRouter);

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"

export default router;
