import Book from "./Book";

function Main({ books, sortedBooks }) {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 md:w-full px-14 ">
      {books &&
        sortedBooks.map((book, index) => {
          const { name, country, numberOfPages } = book;
          const formatedDate = new Date(book.released).toDateString();
          const authors = book.authors.join(", ");

          return (
            <Book
              authors={authors}
              key={index}
              name={name}
              country={country}
              numberOfPages={numberOfPages}
              formatedDate={formatedDate}
              bookNumber={index + 1}
            />
          );
        })}
    </div>
  );
}

export default Main;
