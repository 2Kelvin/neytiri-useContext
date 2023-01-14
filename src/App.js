import { ImageSizeContext } from "../dist/Context.js";
import List from "./List.js";

export default function App() {
  const [isLarge, setIsLarge] = React.useState(false);
  const imgSize = isLarge ? 200 : 150;

  return (
    <div className="m-auto w-fit mt-20">
      <ImageSizeContext.Provider value={imgSize}>
        <label className="flex items-center my-2">
          <input
            className="mr-2"
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          <span className="font-semibold">Use large images</span>
        </label>
        <hr className="my-4" />
        <List />
      </ImageSizeContext.Provider>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
