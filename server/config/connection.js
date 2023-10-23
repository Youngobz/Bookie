const mongoose = require("mongoose");
const config = require("./config");

// Connection URL
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

module.exports = mongoose.connection;
