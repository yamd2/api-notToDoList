import express from "express";
import {
  deleteTask,
  getTasks,
  insertTask,
  updateTask,
} from "../models/task/taskModel.js";
const router = express.Router();

//workflow : CRUD
//C(create) => receive new task and store in database
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    console.log(result);

    res.json({ status: "success", message: "new task has been added" });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }

  const result = await insertTask(req.body);
  res.json({ status: "success", message: "new task has been added" });
});
// R(Read) => read data from data base and return to the client
router.get("/", async (req, res) => {
  //database query to get all tasks

  const data = await getTasks();
  res.json({
    status: "success",
    message: "here are the avilable  list",
    data,
  });
});
// U(update)  => update some information of existing data int the database and respond client accordingly
router.put("/", async (req, res) => {
  const { _id, type } = req.body;
  console.log(req.body);

  const result = await updateTask(_id, { type });

  if (result?._id) {
    res.json({
      status: "success",
      message: "the task is updated successully",
    });
  } else {
    res.json({
      status: "nothing updated",
      message: "task is not updated",
    });
  }
});
// D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/", async (req, res) => {
  const result = await deleteTask(req.body);

  console.log(result);

  if (result?.deletedCount) {
    res.json({
      status: "success",
      message: "the selected task has been deleted",
    });
  } else {
    res.json({
      status: "success",
      message: "Nothing to delete",
    });
  }
});

export default router;
