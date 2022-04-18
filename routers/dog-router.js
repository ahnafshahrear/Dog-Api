const express = require("express");

const dogModel = require("../models/dog-model");

const dogRouter = express.Router();

dogRouter
	.route("/")
	.get(async (req, res) => {
		try {
			const dogs = await dogModel.find({});
			res.status(200).json({
				msg: "Sending all the dogs",
				dogs: dogs,
			});
		} catch (error) {
			res.status(500).json(error);
		}
	})
	.post(async (req, res) => {
		try {
			const dog = new dogModel(req.body);
			await dog.save();
			res.status(200).json({
				msg: "Creating the dog",
			});
		} catch (error) {
			res.status(500).json(error);
		}
	})
	.put((req, res) => {
		try {
			res.status(200).json({
				msg: "Not supported!",
			});
		} catch (error) {
			res.status(500).json(error);
		}
	})
	.delete((req, res) => {
		try {
			res.status(200).json({
				msg: "Not allowed to delete all the dogs!",
			});
		} catch (error) {
			res.status(500).json(error);
		}
	});

dogRouter
	.route("/:Id")
	.get(async (req, res) => {
		try {
			const id = req.params.Id;
			const dog = await dogModel.find({ id: id });
			res.status(200).json({
				msg: "Sending the dog",
				dog: dog,
			});
		} catch (error) {
			const name = req.params.Id;
			const dog = await dogModel.find({ name: name });
			res.status(200).json({
				msg: "Sending the dog",
				dog: dog,
			});
		}
	})
	.post(async (req, res) => {
		try {
			res.status(200).json({
				msg: "Doesn't support the operation",
			});
		} catch (error) {
			res.status(500).json(error);
		}
	})
	.put(async (req, res) => {
		try {
			const id = req.params.Id;
			await dogModel.findByIdAndUpdate(id, {
				$set: req.body,
			});
			res.status(200).json({
				msg: "Updating the dog",
			});
		} catch (error) {
			res.status(500).json(error);
		}
	})
	.delete(async (req, res) => {
		try {
            await dogModel.findByIdAndRemove(req.params.Id);
			res.status(200).json({
				msg: "Deleting the dog!",
			});
		} catch (error) {
			res.status(500).json(error);
		}
	});

module.exports = dogRouter;
