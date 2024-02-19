import Image from "next/image";

export default function Spotlight({ imageSource, artist }) {
  console.log(imageSource);
  return (
    <div>
      <h1>Art Gallery</h1>
      <Image src={imageSource} alt={artist} width={450} height={300} />
      <p>{artist}</p>
    </div>
  );
}
