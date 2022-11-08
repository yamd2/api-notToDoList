import express from "express";

const app = express();
const PORT = 8000;
import morgan from "morgan";

//middleware
app.use(morgan("dev"));

// api endpoints

//workflow : CRUD
//C(create) => receive new task and store in database
app.post("/api/v1/task", (req, res) => {
  res.json({ message: "to do post method" });
});
// R(Read) => read data from data base and return to the client
app.get("/api/v1/task", (req, res) => {
  res.json({ message: "todo get method" });
});
// U(update)  => update some information of existing data int the database and respond client accordingly
app.put("/api/v1/task", (req, res) => {
  res.json({ message: "todo put method" });
});
// D(Delete) => Delete data(s) from database and response client accordingly
app.delete("/api/v1/task", (req, res) => {
  res.json({ message: "todo delete list" });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running at http://localhost:${PORT}`);
});
