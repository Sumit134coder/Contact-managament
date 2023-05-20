const express = require("express");
const app = express();
//multiple routes can be decalaread and user as a middleware
const router = require("./routes/contactRoutes");
const recordRouter = require("./routes/recordRoutes")

const PORT = 3000;

// inbuilt body parser comes with express
app.use(express.json())

app.use("/api/v1", router);
app.use("/api/v2", recordRouter);


app.listen(PORT, () => {
  console.log("App listening on port 3000");
});
