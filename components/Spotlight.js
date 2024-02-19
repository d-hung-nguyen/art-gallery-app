import Image from "next/image";

export default function Spotlight({ imageSource, artist }) {
  console.log(imageSource);
  return (
    <div>
      <Image src={imageSource} layout="responsive" width={500} height={300} />
      {artist}
    </div>
  );
}
