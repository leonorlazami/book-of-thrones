function Book({
  name,
  country,
  numberOfPages,
  formatedDate,
  bookNumber,
  authors,
}) {
  return (
    <div className="border-2 border-black mx-6 my-5 w-auto px-5 py-3 flex flex-col font-primary md:text-xl text-bg-dark  bg-tertiary  ">
      <div className="flex flex-col items-center mb-2">
        <h2 className="text-bg-dark">Book number {bookNumber} </h2>
        <p className="font-bold ">{name}</p>
      </div>
      <div className="flex flex-col mt-4">
        <p>Author: {authors}</p>
        <p>Book pages: {numberOfPages}</p>
        <p>Country of origin: {country}</p>
        <p>Release date: {formatedDate}</p>
      </div>
    </div>
  );
}

export default Book;
