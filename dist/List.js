import { neytiri_pictures } from "../dist/pictureData.js";
import Image from "./Image.js";

export default function List() {
  var list = neytiri_pictures.map(function (picture) {
    return React.createElement(
      "li",
      { key: picture.id },
      React.createElement(Image, { picture: picture }),
      React.createElement(
        "p",
        null,
        picture.description
      )
    );
  });
  return React.createElement(
    "ul",
    null,
    list
  );
}