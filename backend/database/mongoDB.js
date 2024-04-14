// Import the mongoose module
const mongoose = require("mongoose");
const { ServerApiVersion } = require("mongodb");

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDbUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hvp8pjn.mongodb.net/?retryWrites=true&w=majority`;

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDbUri, { dbName: "hilex_db", serverApi: ServerApiVersion.v1 })
        .then(() => {
            console.log("Connected to MongoDB successfully...");
        });
}
