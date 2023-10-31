import React from "react";
import styled from "styled-components";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useNavigate } from "react-router-dom";
import auth from "../service/auth-helper";

const HomeWrapper = styled.div`
  text-align: center;
  margin: 0;
`;

const BookCardList = styled.div`
  display: flex;
  justify-content: start;
  margin: 0 auto;
  max-width: 900px;
  flex-wrap: wrap;
`;

const BookCardWrapper = styled.div`
  background: #ececec;
  width: 240px;
  margin: 20px;
  height: 240px;

  &:hover {
    transform: scale(1.15);
  }
`;

const BookCard = styled.div`
  width: 200px;
  padding: 0 20px;
  height: 200px;
  cursor: pointer;
`;

const BookImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const BookTitle = styled.div`
  color: #2628cf;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  padding: 0 18px;

  span {
    align-self: center;
  }
`;

const EditIconWrapper = styled.span`
  cursor: pointer;
`;

const DeleteIconWrapper = styled.span`
  cursor: pointer;
`;

const Title = styled.span`
  display: inline-block;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  text-align: left;
  padding: 4px 0;
`;

const HomeContent = (props) => {
  const navigate = useNavigate();
  const { books, deleteBooks } = props;
  if (!Array.isArray(books) || !books.length) {
    return <HomeWrapper>No books found.</HomeWrapper>;
  }

  const editBtnHandler = (bookData) => {
    navigate("/update-book", {
      state: {
        bookData,
      },
    });
  };

  const openBookDetails = (bookData) => {
    navigate(`/book-details/${bookData._id}`);
  };

  return (
    <HomeWrapper>
      <h1 className="mb-4">All Books</h1>
      <BookCardList>
        {books.map((book, index) => (
          <BookCardWrapper>
            <BookTitle>
              <Title onClick={() => openBookDetails(book)} title={book.title}>
                {book.title}
              </Title>
              {auth.isAuthenticated() && (
                <span>
                  <EditIconWrapper onClick={() => editBtnHandler(book)}>
                    <EditIcon />
                  </EditIconWrapper>
                  <DeleteIconWrapper onClick={() => deleteBooks(book._id)}>
                    <DeleteForeverIcon />
                  </DeleteIconWrapper>
                </span>
              )}
            </BookTitle>
            <BookCard
              className="image-container d-flex justify-content-start m-3"
              key={index}
              onClick={() => {
                console.log("redirect to book");
              }}
            >
              <BookImage src={book.image} alt="book"></BookImage>
            </BookCard>
          </BookCardWrapper>
        ))}
      </BookCardList>
    </HomeWrapper>
  );
};

export default HomeContent;
