const mongoose = require("mongoose");

const uri = "mongodb+srv://bookuser:Book_123@cluster0.qqirxgi.mongodb.net/?retryWrites=true&w=majority";

// Connection URL
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (err) => {
  throw new Error(`unable to connect to database: ${uri}`);
});

module.exports = mongoose.connection;
