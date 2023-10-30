const mongoose = require("mongoose");
const seedData = require("./seedUtils"); // Create a separate utility file for your seeding logic
const config = require("../config/config");

// Connect to the MongoDB database
mongoose.connect(config.mongoUri, { useNewUrlParser: true });

// Seed the database
async function seed() {
  try {
    // Perform your data seeding here
    await seedData();
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    // Disconnect from the database
    mongoose.disconnect();
  }
}

// Call the seeding function
seed();
