import loadingDark from "../assets/ring-dark.svg";
import loadingLight from "../assets/ring-light.svg";
function Loader(darkMode) {
  return (
    <div className="flex justify-center">
      <img src={darkMode ? loadingDark : loadingLight} alt="" />
    </div>
  );
}

export default Loader;
