import { ImageSizeContext } from "../dist/Context.js";
import List from "./List.js";

export default function App() {
  const [isLarge, setIsLarge] = React.useState(false);
  const imgSize = isLarge ? 200 : 100;

  return (
    <ImageSizeContext.Provider value={imgSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
