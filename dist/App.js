var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { ImageSizeContext } from "../dist/Context.js";
import List from "./List.js";

export default function App() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isLarge = _React$useState2[0],
      setIsLarge = _React$useState2[1];

  var imgSize = isLarge ? 200 : 150;

  return React.createElement(
    "div",
    { className: "m-auto w-fit mt-20" },
    React.createElement(
      ImageSizeContext.Provider,
      { value: imgSize },
      React.createElement(
        "label",
        { className: "flex items-center my-2" },
        React.createElement("input", {
          className: "mr-2",
          type: "checkbox",
          checked: isLarge,
          onChange: function onChange(e) {
            setIsLarge(e.target.checked);
          }
        }),
        React.createElement(
          "span",
          { className: "font-semibold" },
          "Use large images"
        )
      ),
      React.createElement("hr", { className: "my-4" }),
      React.createElement(List, null)
    )
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));