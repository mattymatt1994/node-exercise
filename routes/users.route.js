import express from "express";
import db from "../mockdb";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  const { id } = req.params;
  let data;

  try {
    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = req.body;
    const data = await db.add(newUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const upUser = req.body;
    const data = await db.update(id, upUser);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await db.remove(id);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

export default router;
