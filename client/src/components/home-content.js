import React from "react";

const HomeContent = (props) => {
  const { books } = props;
  debugger;
  if (!Array.isArray(books) || !books.length) {
    return <div className="allbooks">No books found.</div>;
  }

  return (
    <div className="allbooks">
      <h1 className="mb-4">All Books</h1>
      <div className="row">
        {books.map((book, index) => (
          <div
            className="image-container d-flex justify-content-start m-3"
            key={index}
            onClick={() => {
              console.log("redirect to book");
            }}
          >
            <img src={book.image} alt="book"></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
