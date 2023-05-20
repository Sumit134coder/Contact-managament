const express = require("express");
const app = express();
const router = require("./routes/contactRoutes");

const PORT = 3000;

app.use("/api/v1", router);


app.listen(PORT, () => {
  console.log("App listening on port 3000");
});
