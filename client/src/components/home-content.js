import React from "react";
import Styled from "styled-components";

const HomeWrapper = Styled.div`
  text-align: center;
  margin: 0;
`;

const BookCardWrapper = Styled.div`
  display: flex;
  justify-content: start;
  margin: 0 auto;
  max-width: 800px;
  flex-wrap: wrap;
`;

const BookCard = Styled.div`
  width: 200px;
  margin: 20px;
  height: 200px;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`;

const BookImage = Styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const BookTitle = Styled.div`
  color: #fff;
`;

const HomeContent = (props) => {
  const { books } = props;
  if (!Array.isArray(books) || !books.length) {
    return <HomeWrapper>No books found.</HomeWrapper>;
  }

  return (
    <HomeWrapper>
      <h1 className="mb-4">All Books</h1>
      <BookCardWrapper>
        {books.map((book, index) => (
          <BookCard
            className="image-container d-flex justify-content-start m-3"
            key={index}
            onClick={() => {
              console.log("redirect to book");
            }}
          >
            <BookImage src={book.image} alt="book"></BookImage>
            <BookTitle>{book.title}</BookTitle>
          </BookCard>
        ))}
      </BookCardWrapper>
    </HomeWrapper>
  );
};

export default HomeContent;
