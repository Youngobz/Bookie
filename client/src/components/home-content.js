import React from "react";
import Styled from "styled-components";

const HomeWrapper = Styled.div`
  text-align: center;
`;

const HomeContent = (props) => {
  const { books } = props;
  if (!Array.isArray(books) || !books.length) {
    return <HomeWrapper>No books found.</HomeWrapper>;
  }

  return (
    <HomeWrapper>
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
    </HomeWrapper>
  );
};

export default HomeContent;
