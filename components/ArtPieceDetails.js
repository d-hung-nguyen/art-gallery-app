import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  imageSource,
  title,
  artist,
  year,
  genre,
}) {
  return (
    <div>
      <Image src={imageSource} alt={title} width={200} height={200} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <Link href={`/art-pieces`}>back to art pieces</Link>
    </div>
  );
}
