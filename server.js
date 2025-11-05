

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to the Server Side");
});


app.post("/create-user", (req, res) => {
  res.send('user created successfully');
});


app.put("/update-user", (req, res) => {
  res.send('user updated successfully');
});


app.patch("/update-email", (req, res) => {
  res.send('user patch succeccfully');
});


app.delete("/delete-user", (req, res) => {
  res.send('user deleted successfully');
});


app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
