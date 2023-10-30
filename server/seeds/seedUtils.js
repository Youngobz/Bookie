const Book = require("../models/bookModel");

async function seedData() {
  // Create sample data
  const Book1 = new Book({
    title: "Star Wars",
    description:
      "Lorem ipsum is pseudo-Latin text that has no intelligible meaning. It's thought to have originated from an unknown typesetter in the 15th century who scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
    authors: ["Chris Alexander"],
    image:
      "http://books.google.com/books/content?id=bboqhx5mk54C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books/content?id=bboqhx5mk54C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  });

  const Book2 = new Book({
    title: "Twilight Saga",
    description:
      "Lorem ipsum is pseudo-Latin text that has no intelligible meaning. It's thought to have originated from an unknown typesetter in the 15th century who scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
    authors: ["Stephenie Meyer"],
    image:
      "http://books.google.com/books/content?id=dQZmAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books/content?id=dQZmAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  });

  const Book3 = new Book({
    title: "Atomic Habits",
    description:
      "Lorem ipsum is pseudo-Latin text that has no intelligible meaning. It's thought to have originated from an unknown typesetter in the 15th century who scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
    authors: ["James Clear"],
    image:
      "http://books.google.com/books/content?id=rruOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books/content?id=rruOEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  });

  const Book4 = new Book({
    title: "Master Your Focusssss",
    description:
      "Lorem ipsum is pseudo-Latin text that has no intelligible meaning. It's thought to have originated from an unknown typesetter in the 15th century who scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
    authors: ["Thibaut Meurisse"],
    image:
      "http://books.google.com/books/content?id=YOekzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books/content?id=YOekzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  });

  const Book5 = new Book({
    title: "Test Title",
    description: "Test",
    authors: ["Test Author"],
    image:
      "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg",
    link: "https://img.freepik.com/free-vector/abstract-elegant-winter-book-cover_23-2148798745.jpg",
  });

  // Save data to the database
  await Book.insertMany([Book1, Book2, Book3, Book4, Book5]);

  console.log("Data seeding completed.");
}

module.exports = seedData;
