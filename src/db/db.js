const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://shivamkumar:PeNG3kUgm1zOFaoh@cluster0.r5fh5z6.mongodb.net/cohort"
    )
    .then(() => {
      console.log("connected to DB");
    });
}

module.exports = connectToDB;
