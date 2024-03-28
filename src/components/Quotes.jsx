function Quotes({ quotes }) {
  return (
    <div className="mx-10 md:grid md:grid-cols-3 h-auto flex flex-col gap-4">
      {quotes.map((quote, index) => {
        return (
          <div
            className="border border-black mx-6 my-5 w-auto px-5 py-3 flex flex-col font-primary md:text-xl text-bg-dark  bg-tertiary "
            key={index}
          >
            <div className="flex flex-col">
              <p className="text-center py-5 font-thrones tracking-widest">
                {quote.character.name}
              </p>
              <p>House: {quote.character.house.name}</p>
              <p>Nickname: {quote.character.slug}</p>
              <p className="">
                Quote: <strong> &quot;{quote.sentence}&quot;</strong>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Quotes;
