const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(require('./routes'));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/thoughtful-nights",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`=== Listening on Port ${PORT} ===`));
