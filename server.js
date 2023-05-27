const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
//multiple routes can be decalaread and user as a middleware
const router = require("./routes/contactRoutes");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

const PORT = 3000;

connectDb()

// inbuilt body parser comes with express

app.use(express.json());

app.use("/api/v1/contacts", router);
app.use("/api/v1/users" , userRouter)
app.use(errorHandler)


app.listen(PORT, () => {
  console.log("App listening on port 3000");
});
