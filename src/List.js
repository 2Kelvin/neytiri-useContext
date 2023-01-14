import { neytiri_pictures } from "../dist/pictureData.js";
import Image from "./Image.js";

export default function List() {
  const list = neytiri_pictures.map((picture) => (
    <li key={picture.id} className="my-4 min-w-[150] max-w-[250]">
      <Image picture={picture} />
      <p className="text-xs text-gray-800">{picture.description}</p>
    </li>
  ));
  return <ul className="my-4">{list}</ul>;
}
