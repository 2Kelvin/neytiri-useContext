import { ImageSizeContext } from "../dist/Context.js";

export default function Image({ picture }) {
  const imageSize = React.useContext(ImageSizeContext);

  return (
    <img
      src={picture.src}
      alt="Ney'tiri"
      height={imageSize}
      width={imageSize}
      className="object-contain rounded shadow-lg"
    />
  );
}
