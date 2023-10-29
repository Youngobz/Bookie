import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBookById, submitReview, deleteReview } from "../service";
import styled from "styled-components";
import CallMadeIcon from "@material-ui/icons/CallMade";
import ReviewList from "../components/review-list";
import AddReview from "../components/add-review";
import auth from "../service/auth-helper";

const BookDetailWrapper = styled.div`
  max-width: 900px;
  margin: 20px auto;
  width: 60%;
  text-align: center;
  background: #ececec;
  padding: 20px;
  border-radius: 8px;
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

const AddReviewWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 10px;
`;

const ReviewListWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 10px;
  border-top: 2px solid #3f51b5;
`;

const BookDetails = () => {
  const { bookId } = useParams();
  const [bookData, setBookData] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");

  const getBookDetails = async () => {
    const resp = await getBookById(bookId);
    setBookData(resp);
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  const onRatingClicked = (ratingVal) => {
    setSelectedRating(ratingVal);
  };

  const onReviewdAdded = (event) => {
    setReviewComment(event.currentTarget.value);
  };

  const onSubmitReview = async (event) => {
    event.preventDefault();
    const reqBody = {
      bookId,
      rating: selectedRating,
      reviewBody: reviewComment,
      username: auth.getUserName(),
    };
    const resp = await submitReview(reqBody);
    if (resp.success) {
      setReviewComment("");
      setBookData(resp.data);
    }
  };

  const onDeleteReview = async (reviewId) => {
    const resp = await deleteReview(bookId, reviewId);
    if (resp.success) {
      setBookData(resp.data);
    }
  };

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
      {auth.isAuthenticated() && (
        <AddReviewWrapper>
          <AddReview
            selectedRating={selectedRating}
            reviewComment={reviewComment}
            onRatingClicked={onRatingClicked}
            onReviewdAdded={onReviewdAdded}
            onSubmitForm={onSubmitReview}
          />
        </AddReviewWrapper>
      )}
      <ReviewListWrapper>
        <ReviewList
          dataList={bookData.reviews}
          onDeleteHandler={onDeleteReview}
        />
      </ReviewListWrapper>
    </BookDetailWrapper>
  );
};

export default BookDetails;
