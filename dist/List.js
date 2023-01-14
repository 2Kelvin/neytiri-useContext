import { neytiri_pictures } from "../dist/pictureData.js";
import Image from "./Image.js";

export default function List() {
  var list = neytiri_pictures.map(function (picture) {
    return React.createElement(
      "li",
      { key: picture.id, className: "my-4 min-w-[150] max-w-[250]" },
      React.createElement(Image, { picture: picture }),
      React.createElement(
        "p",
        { className: "text-xs text-gray-800" },
        picture.description
      )
    );
  });
  return React.createElement(
    "ul",
    { className: "my-4" },
    list
  );
}