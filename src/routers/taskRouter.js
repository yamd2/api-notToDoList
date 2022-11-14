import express from "express";
const router = express.Router();

//fake database
let fakeTaskTable = [
  {
    _id: 1,
    task: "coding",
    hr: 50,
    type: "entry",
  },
  {
    _id: 2,
    task: "eating",
    hr: 2,
    type: "bad",
  },
  {
    _id: 3,
    task: "sleeping",
    hr: 8,
    type: "entry",
  },
];

//workflow : CRUD
//C(create) => receive new task and store in database
router.post("/", (req, res) => {
  console.log(req.body);

  fakeTaskTable.push(req.body);
  res.json({ status: "success", message: "new task has been added" });
});
// R(Read) => read data from data base and return to the client
router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "here are the avilable  list",
    data: fakeTaskTable,
  });
});
// U(update)  => update some information of existing data int the database and respond client accordingly
router.put("/", (req, res) => {
  const { _id, type } = req.body;
  console.log(req.body);

  fakeTaskTable = fakeTaskTable.map((item) => {
    if (item._id === _id) {
      item.type = type;
    }
    return item;
  });

  res.json({
    status: "success",
    message: "todo put method",
  });
});
// D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/:_id?", (req, res) => {
  const { _id } = req.params;

  if (!_id) {
    res.status(400).json({
      status: "error",
      message: "invalid request , _id is  missing",
    });
    return;
  }
  console.log(req.params);
  fakeTaskTable = fakeTaskTable.filter((item) => item._id != _id);
  console.log(fakeTaskTable);
  res.json({
    status: "success",
    message: "the selected task has been deleted",
  });
});

export default router;
