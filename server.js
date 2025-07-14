const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

app.get("/", (req, res) => {
  res.send("hello to my page");
});

// Post method to create notes
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Post method successfull",
  });
});

//GET method to read notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// PATCH method to update notes
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title } = req.body;

  notes[index].title = title;

  res.json({
    message: "Patch method successfull",
  });
});

// DELETE method to delete notes
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];

  res.json({
    message: "Delete method succesfull",
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
