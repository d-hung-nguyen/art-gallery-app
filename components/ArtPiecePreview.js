import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ imageSource, title, artist }) {
  return (
    <div>
      <Image src={imageSource} width={200} height={200} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
    </div>
  );
}
