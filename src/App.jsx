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
  const [toggleDark, setIsDark] = useState(false);
  const sortedBooks =
    sorting === "descending"
      ? [...books].sort((a, b) => new Date(b.released) - new Date(a.released))
      : sorting === "ascending"
      ? [...books].sort((a, b) => new Date(a.released) - new Date(b.released))
      : sorting === "pageNr"
      ? [...books].sort((a, b) => a.numberOfPages - b.numberOfPages)
      : [...books];

  function toggleMode() {
    setIsDark((prev) => !prev);
  }
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
    <div className={toggleDark ? "dark" : ""}>
      <div className="dark:bg-bg-dark md:h-screen h-[100%] bg-white">
        <Header
          onFetchBooks={getBooks}
          onFetchQuotes={getQuotes}
          sorting={sorting}
          setSorting={setSorting}
          typeOfContent={typeOfContent}
          toggleMode={toggleMode}
          darkMode={toggleDark}
        />
        {isLoading ? (
          <Loader darkMode={toggleDark} />
        ) : typeOfContent === "books" ? (
          <Main books={books} sortedBooks={sortedBooks} />
        ) : (
          <Quotes quotes={quotes} />
        )}
      </div>
    </div>
  );
}

export default App;
