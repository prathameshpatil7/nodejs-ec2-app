import { MongoClient, ServerApiVersion } from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();
const URI = `mongodb+srv://patilprathamesh18et1003:${process.env.MONGO_PASSWORD}@dev-cluster.aykft.mongodb.net/?retryWrites=true&w=majority&appName=dev-cluster`;
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("Nodejs_EC2");

//
export default db;
