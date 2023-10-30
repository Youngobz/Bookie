import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { updateBooks } from "../service";
import { useNavigate, useLocation } from "react-router-dom";

const FormWrapper = styled.div`
  margin: auto;
  max-width: 600px;
  margin-top: 40px;
  text-align: center;
  padding-bottom: 16px;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #fff;
  border-radius: 4px;
`;

const FormHeading = styled.h6`
  margin-top: 16px;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  margin-bottom: 0;
`;

const FormContent = styled.form`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  max-width: 360px;
  margin: 40px auto 40px;
  background: #fff;
  padding: 40px;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  position: relative;
  padding-top: 16px;
  margin-bottom: 16px;
  &.not-empty {
    .animated-label {
      top: 0;
      font-size: 12px;
    }
  }
`;

const FormLabel = styled.label`
  position: absolute;
  top: 20px;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  font-weight: 300;
  opacity: 0.5;
  cursor: text;
  transition: 0.2s ease all;
  margin: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  text-align: left;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 45%;
    height: 2px;
    width: 10px;
    visibility: hidden;
    background-color: #3f51b5;
    transition: 0.2s ease all;
  }
`;

const InputField = styled.input`
  position: relative;
  z-index: 1;
  border-radius: 0;
  border-width: 0 0 1px;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  height: auto;
  padding: 3px 0 5px;
  width: 100%;
  height: 18px;

  &:focus {
    box-shadow: none;
    border-bottom-color: rgba(0, 0, 0, 0.12);

    ~ .animated-label {
      top: 0;
      opacity: 1;
      color: #3f51b5;
      font-size: 12px;

      &:after {
        visibility: visible;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const TextAreaField = styled.textarea`
  position: relative;
  z-index: 1;
  border-radius: 0;
  border-width: 0 0 1px;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  height: auto;
  padding: 3px 0 5px;
  width: 100%;
  height: 58px;

  &:focus {
    box-shadow: none;
    border-bottom-color: rgba(0, 0, 0, 0.12);

    ~ .animated-label {
      top: 0;
      opacity: 1;
      color: #3f51b5;
      font-size: 12px;

      &:after {
        visibility: visible;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px;
  align-items: center;
`;

const Button = styled.button`
  padding: 6px 16px;
  color: #fff;
  background-color: #3f51b5;
  margin: auto;
  margin-bottom: 16px;
  cursor: pointer;
`;

const UpdateBook = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [values, setValues] = useState({
    title: "",
    link: "",
    image: "",
    description: "",
    authors: "",
  });

  useEffect(() => {
    setValues(state.bookData);
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBooks(values).then((data) => {
      if (data.success) {
        navigate("/");
      }
    });
  };

  return (
    <div>
      <FormWrapper>
        <FormContent onSubmit={handleSubmit}>
          <FormHeading>Update Your Book</FormHeading>
          <FormGroup className={`${values.title.length && "not-empty"}`}>
            <InputField
              type="text"
              id="title"
              value={values.title}
              onChange={handleChange("title")}
            />
            <FormLabel className="animated-label" for="title">
              Title
            </FormLabel>
          </FormGroup>
          <FormGroup className={`${values.authors.length && "not-empty"}`}>
            <InputField
              type="text"
              id="author"
              value={values.authors}
              onChange={handleChange("authors")}
            />
            <FormLabel className="animated-label" for="author">
              Author
            </FormLabel>
          </FormGroup>
          <FormGroup className={`${values.link.length && "not-empty"}`}>
            <InputField
              type="text"
              id="link"
              value={values.link}
              onChange={handleChange("link")}
            />
            <FormLabel className="animated-label" for="link">
              Link
            </FormLabel>
          </FormGroup>
          <FormGroup className={`${values.image.length && "not-empty"}`}>
            <InputField
              type="text"
              id="image"
              value={values.image}
              onChange={handleChange("image")}
            />
            <FormLabel className="animated-label" for="image">
              Image Uri
            </FormLabel>
          </FormGroup>
          <FormGroup className={`${values.description.length && "not-empty"}`}>
            <TextAreaField
              type="text"
              id="description"
              value={values.description}
              onChange={handleChange("description")}
            />
            <FormLabel className="animated-label" for="description">
              Description
            </FormLabel>
          </FormGroup>
          <ButtonWrapper>
            <Button type="submit">Update Book</Button>
          </ButtonWrapper>
        </FormContent>
      </FormWrapper>
    </div>
  );
};

export default UpdateBook;
