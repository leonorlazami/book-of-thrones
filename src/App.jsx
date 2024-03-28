import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Quotes from "./components/Quotes";
function App() {
  const [books, setBooks] = useState([]);
  const [sorting, setSorting] = useState("descending");
  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [typeOfContent, setTypeOfContent] = useState("books");
  const sortedBooks =
    sorting === "descending"
      ? [...books].sort((a, b) => new Date(b.released) - new Date(a.released))
      : sorting === "ascending"
      ? [...books].sort((a, b) => new Date(a.released) - new Date(b.released))
      : sorting === "pageNr"
      ? [...books].sort((a, b) => a.numberOfPages - b.numberOfPages)
      : [...books];

  function getBooks() {
    setIsLoading(true);
    fetch("https://www.anapioficeandfire.com/api/books?pageSize=30")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setBooks(data);
      });
    setTypeOfContent("books");
  }

  function getQuotes() {
    setIsLoading(true);
    fetch("https://api.gameofthronesquotes.xyz/v1/random/6")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setQuotes(data);
      });
    setTypeOfContent("quotes");
  }
  console.log("books", books);
  return (
    <>
      <Header
        onFetchBooks={getBooks}
        onFetchQuotes={getQuotes}
        sorting={sorting}
        setSorting={setSorting}
        typeOfContent={typeOfContent}
      />
      {isLoading ? (
        <Loader />
      ) : typeOfContent === "books" ? (
        <Main books={books} sortedBooks={sortedBooks} />
      ) : (
        <Quotes quotes={quotes} />
      )}
    </>
  );
}

export default App;
