import React from "react";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

const TextAreaField = styled.textarea`
  width: 100%;
  height: 58px;
`;

const Button = styled.button`
  padding: 6px 16px;
  color: #fff;
  background-color: #3f51b5;
  margin: auto;
  margin-bottom: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #a1a1a1;
    cursor: not-allowed;
  }
`;

const AddReview = (props) => {
  const {
    selectedRating = 0,
    reviewComment = "",
    onRatingClicked,
    onReviewdAdded,
    onSubmitForm,
  } = props;
  const reviewAttr = {
    size: 30,
    value: selectedRating,
    edit: true,
    onChange: onRatingClicked,
  };

  return (
    <form onSubmit={onSubmitForm}>
      <ReactStars {...reviewAttr} />
      <TextAreaField
        type="text"
        onChange={onReviewdAdded}
        placeholder="Add your comment."
        value={reviewComment}
      />
      <div>
        <Button type="submit" disabled={!reviewComment || !selectedRating}>
          Add Comment
        </Button>
      </div>
    </form>
  );
};

export default AddReview;
