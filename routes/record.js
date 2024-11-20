import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post("/", async (req, res) => {
  try {
    const { name, position, level } = req.body;

    // Validate input
    if (!name || !position || !level) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const newDocument = { name, position, level };
    const collection = db.collection("records");
    const result = await collection.insertOne(newDocument);

    res.status(201).send({ id: result.insertedId, ...newDocument });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Error adding record" });
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});

// API to insert bulk data into MongoDB
router.post("/bulk-insert", async (req, res) => {
  try {
    const collection = db.collection("records");

    // Ensure the data is an array
    const bulkData = req.body;
    if (!Array.isArray(bulkData)) {
      return res
        .status(400)
        .json({ error: "Input data must be an array of objects" });
    }

    // Validate if all items in the array are objects
    const isValid = bulkData.every(
      (item) => typeof item === "object" && item !== null
    );
    if (!isValid) {
      return res
        .status(400)
        .json({ error: "Each item in the array must be an object" });
    }

    // Insert the bulk data
    const result = await collection.insertMany(bulkData);

    // Respond with the result
    res.status(201).json({
      message: "Bulk data inserted successfully",
      insertedCount: result.insertedCount,
      insertedIds: result.insertedIds,
    });
  } catch (error) {
    console.error("Error inserting bulk data:", error);
    res.status(500).json({ error: "Failed to insert bulk data" });
  }
});
export default router;
