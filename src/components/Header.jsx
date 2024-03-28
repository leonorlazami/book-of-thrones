import swordFilled from "../assets/swords-filled.png";
import swordOutline from "../assets/swords-outline.png";

function Header({ onFetchBooks, setSorting, onFetchQuotes, typeOfContent }) {
  function handleSort(value) {
    setSorting(value);
  }
  return (
    <header className="font-primary text-primary flex md:justify-between items-center py-10  flex-col md:flex-row	px-20">
      <h1 className="text-2xl font-bold text-center md:text-3xl font-thrones tracking-widest">
        {`${
          typeOfContent === "quotes" ? "QUOTE OF THRONES" : "BOOK OF THRONES"
        }`}
      </h1>
      <button onClick={onFetchQuotes}>
        <img
          src={`${typeOfContent === "quotes" ? swordFilled : swordOutline}`}
          alt=""
          className="my-4 md:w-10"
        />
      </button>

      <div className="flex justify-center mt-4 gap-4 text-sm md:text-md">
        <button
          onClick={onFetchBooks}
          className={`border border-secondary px-2 md:text-xl py-1 mr-2 relative ${
            typeOfContent === "quotes" ? "left-16" : ""
          }`}
        >
          Fetch data
        </button>
        <div
          className={`self-center ${
            typeOfContent === "quotes" ? "invisible" : "flex"
          }`}
        >
          <select
            onChange={(e) => handleSort(e.target.value)}
            name=""
            id=""
            className="border-primary mr-2 bg-bg-dark"
          >
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
