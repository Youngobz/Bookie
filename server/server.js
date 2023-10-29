const PORT = 3001;

const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const { ApolloServer, gql } = require("apollo-server-express");
const Book = require("./models/bookModel");

const typeDefs = gql`
  type Review {
    reviewBody: String
    rating: String
    username: String
    createdAt: String
  }

  type Book {
    _id: ID!
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find(); // Fetch all books from MongoDB
    },
  },
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await server.start();
  server.applyMiddleware({ app });

  // parse body params and attache them to req.body
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(compress());
  // secure apps by setting various HTTP headers
  app.use(helmet());
  // enable CORS - Cross Origin Resource Sharing
  app.use(cors());

  // mount routes
  app.use(routes);

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}${server.graphqlPath}!`);
    });
  });
})();
// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});
