const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
require("dotenv").config();

const connectionURL = process.env.MONGO_DB_URL;

const databaseName = process.env.MONGO_DB_NAME;

const client = new MongoClient(connectionURL);
let database; // idempotent?

// connect to mongodb db
async function getDatabase() {
  if (!database) {
    try {
      await client.connect();
      console.log("Connected successfully!");
      database = client.db(databaseName);
    } catch (err) {
      console.error(err, "Failed to connect");
    }
  }

  return database;
}

module.exports = { getDatabase };
