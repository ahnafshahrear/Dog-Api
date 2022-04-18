const express = require("express");
const mongoose = require("mongoose");

const dogRouter = require("./routers/dog-router");

mongoose
	.connect("mongodb://localhost:27017/DogsDB")
	.then(() => {
		console.log("Database connected...");
	})
	.catch((error) => {
		console.log("Couldn't connect to database");
		console.log(error);
	});

const app = express();
app.use(express.json());

app.use("/api/dogs", dogRouter);

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});