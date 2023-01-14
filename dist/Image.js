import { ImageSizeContext } from "../dist/Context.js";

export default function Image(_ref) {
  var picture = _ref.picture;

  var imageSize = React.useContext(ImageSizeContext);

  return React.createElement("img", {
    src: picture.src,
    alt: "Ney'tiri",
    height: imageSize,
    width: imageSize
  });
}