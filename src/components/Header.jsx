import { RiSwordFill, RiSwordLine } from "react-icons/ri";

import { GoMoon, GoSun } from "react-icons/go";

function Header({
  onFetchBooks,
  setSorting,
  onFetchQuotes,
  typeOfContent,
  toggleMode,
  darkMode,
}) {
  function handleSort(value) {
    setSorting(value);
  }
  return (
    <header className="font-primary dark:text-primary  flex md:justify-between items-center py-10  flex-col md:flex-row	px-20 text-secondary-light">
      <h1 className="text-2xl font-bold text-center md:text-3xl font-thrones tracking-widest">
        {`${
          typeOfContent === "quotes" ? "QUOTE OF THRONES" : "BOOK OF THRONES"
        }`}
      </h1>
      <button onClick={onFetchQuotes}>
        {typeOfContent === "quotes" ? (
          <RiSwordFill size={40} />
        ) : (
          <RiSwordLine size={40} />
        )}
      </button>

      <div className="flex justify-center mt-4 gap-4 text-sm md:text-md">
        <button
          onClick={onFetchBooks}
          className={`dark:border dark:border-secondary border-secondary-light bg-primary-light text-secondary-light px-2 dark:bg-bg-dark dark:text-secondary md:text-xl py-1 mr-2 relative ${
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
            className="dark:border-primary mr-2 dark:bg-bg-dark bg-white"
          >
            <option value="descending">Descending</option>
            <option value="ascending">Ascending</option>
          </select>
        </div>
        <button
          onClick={toggleMode}
          className={`${typeOfContent === "quotes" ? "right-16" : ""} relative`}
        >
          {darkMode ? <GoSun size={25} /> : <GoMoon size={30} color="" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
