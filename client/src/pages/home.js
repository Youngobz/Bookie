import React, { Fragment, useState, useEffect } from "react";
import HomeContent from "../components/home-content";
import { deleteBooks } from "../service";
import { useQuery } from "@apollo/client";
import GET_BOOKS from "../service/graphql";

function Home(props) {
  const [books, setBooks] = useState([]);
  const { loading, data } = useQuery(GET_BOOKS);

  const getBookRequest = async () => {
    // const bookRespJson = await getBooks();
    if (!loading) {
      setBooks(data.books);
    }
  };

  useEffect(() => {
    getBookRequest();
  }, [loading, data]);

  const onDeleteBtnClicked = async (bookId) => {
    await deleteBooks(bookId);
    await getBookRequest();
  };

  return (
    <Fragment>
      <HomeContent books={books} deleteBooks={onDeleteBtnClicked} />
    </Fragment>
  );
}

export default Home;
