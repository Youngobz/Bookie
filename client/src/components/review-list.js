import React from "react";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

const RatingCardContainer = styled.div`
  margin-top: 10px;
`;

const RatingCardWrapper = styled.div`
  border: 1px solid;
  margin: 5px 0;
  padding: 4px;
`;

const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UserDetailWrapper = styled.div`
  display: flex;
`;

const DateWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const DeleteButton = styled.span`
  align-self: end;
  padding: 3px 3px 2px 3px;
  cursor: pointer;
  border: 1px solid;
  border-radius: 4px;

  &:hover {
    background: #cfcfcf;
  }
`;

const ReviewList = (props) => {
  const { dataList, onDeleteHandler } = props;

  if (!Array.isArray(dataList) || !dataList.length) {
    return null;
  }

  const reviewAttr = {
    size: 30,
    value: 0,
    edit: false,
  };

  return (
    <RatingCardContainer>
      {dataList.map((reviewDetails) => {
        const { rating, createdAt, reviewBody, username, _id } = reviewDetails;
        return (
          <RatingCardWrapper key={_id}>
            <RatingWrapper>
              <ReactStars {...reviewAttr} value={rating} />
              <DeleteButton
                onClick={() => {
                  onDeleteHandler(_id);
                }}
              >
                X
              </DeleteButton>
            </RatingWrapper>
            <UserDetailWrapper>
              <b>{username}</b>: {reviewBody}
            </UserDetailWrapper>
            <DateWrapper>- {createdAt}</DateWrapper>
          </RatingCardWrapper>
        );
      })}
    </RatingCardContainer>
  );
};

export default ReviewList;
