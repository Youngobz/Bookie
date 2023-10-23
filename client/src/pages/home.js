import React, { Fragment, useState, useEffect } from "react";
import HomeContent from "../components/home-content";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../service";

function Home(props) {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const getBookRequest = async () => {
    const bookRespJson = await getBooks();
    if (bookRespJson.success) {
      setBooks(bookRespJson.data);
    }
  };

  function navigateToBookDetails(bookid) {
    console.log(bookid);
    navigate(`/bookDetails/${bookid}`);
  }

  useEffect(() => {
    getBookRequest();
  }, []);

  return (
    <Fragment>
      <HomeContent books={books} />
    </Fragment>
  );
}

export default Home;
