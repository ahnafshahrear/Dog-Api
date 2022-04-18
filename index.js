const express = require("express");
const mongoose = require("mongoose");

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

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});