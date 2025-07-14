const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/notes.model");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello to my page");
});

// Post method to create notes
app.post("/notes", async(req, res) => {
  const { title, content } = req.body;

  await noteModel.create({
    title , content
  })
  
  res.json({
    message: "Post method successfull",
  });
});

//GET method to read notes
app.get("/notes", async(req, res) => {
  
  const notes = await noteModel.find()

  res.json({
    message:"notes fetched successfully",
    notes
  })
});

// PATCH method to update notes
app.patch("/notes/:id", async(req, res) => {

  const noteId = req.params.id;
  const { title } = req.body;

  await noteModel.findOneAndUpdate({
    _id:noteId
  },{
    title:title
  })
  
  res.json({
    message: "Patch method successfull",
  });
});

// DELETE method to delete notes
app.delete("/notes/:id", async(req, res) => {
  const noteId = req.params.id;

  await noteModel.findOneAndDelete({
    _id: noteId
  });

  res.json({
    message: "Delete method succesfull",
  });
});

connectToDB();
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
