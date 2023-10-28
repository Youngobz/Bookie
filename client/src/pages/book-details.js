import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById } from "../service";
import styled from "styled-components";
import CallMadeIcon from "@material-ui/icons/CallMade";

const BookDetailWrapper = styled.div`
  max-width: 900px;
  margin: 20px auto;
  width: 60%;
  text-align: center;
  background: #ececec;
  padding: 20px;
`;

const BookDetailCard = styled.div`
  padding: 20px;
`;

const ImageWrapper = styled.div`
  height: 300px;
  margin: 0 auto;
  width: 300px;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
`;

const DescriptionWrapper = styled.div`
  padding: 8px 20px;
  max-width: 80%;
  margin: 0 auto;
`;

const AuthorWrpper = styled.div`
  display: flex;
  justify-content: space-around;

  span {
    align-self: center;
  }

  a {
    display: flex;
    text-decoration: none;
    font-style: italic;
    border: 1px solid;
    padding: 8px;
    background: #2424c3;
    color: #ececec;

    span {
      align-self: center;
      padding-right: 4px;
    }
  }
`;

const BookDetails = () => {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(null);

  const getBookDetails = async () => {
    const resp = await getBookById(bookId);
    setBookData(resp);
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  if (!bookData) {
    return <div>Book is Loading...</div>;
  }

  return (
    <BookDetailWrapper>
      <BookDetailCard>
        <h2>{bookData.title}</h2>
        <ImageWrapper>
          <Image src={bookData.image} alt="Book Image" />
        </ImageWrapper>
        <DescriptionWrapper>
          <p>{bookData.description}</p>
        </DescriptionWrapper>
        <AuthorWrpper>
          <span>
            <Link to={bookData.link} target="_blank">
              <span>Open Book</span>
              <span>
                <CallMadeIcon />
              </span>
            </Link>
          </span>
          <span>-{bookData.authors.join(",")}</span>
        </AuthorWrpper>
      </BookDetailCard>
      <div className="Review-list"></div>
    </BookDetailWrapper>
  );
};

export default BookDetails;
