const getBooks = async () => {
  try {
    let response = await fetch("/api/books", { method: "GET" });
    debugger;
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { getBooks };
