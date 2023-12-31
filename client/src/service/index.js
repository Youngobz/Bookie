const getBooks = async () => {
  try {
    let response = await fetch("/api/books", { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const addBooks = async (reqBody) => {
  try {
    let response = await fetch("/api/books", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(reqBody),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteBooks = async (bookId) => {
  try {
    let response = await fetch(`/api/books/${bookId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const updateBooks = async (reqBody) => {
  try {
    let response = await fetch(`/api/books/${reqBody._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(reqBody),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getBookById = async (bookId) => {
  try {
    let response = await fetch(`/api/books/${bookId}`, { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const submitReview = async (reqBody) => {
  try {
    let response = await fetch(`/api/books/${reqBody.bookId}/review`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(reqBody),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const deleteReview = async (bookId, reviewId) => {
  try {
    let response = await fetch(`/api/books/${bookId}/review/${reviewId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  getBooks,
  addBooks,
  deleteBooks,
  updateBooks,
  getBookById,
  submitReview,
  deleteReview,
};
