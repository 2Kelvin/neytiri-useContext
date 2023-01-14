import { neytiri_pictures } from "../dist/pictureData.js";
import Image from "./Image.js";

export default function List() {
  const list = neytiri_pictures.map((picture) => (
    <li key={picture.id}>
      <Image picture={picture} />
      <p>{picture.description}</p>
    </li>
  ));
  return <ul>{list}</ul>;
}
