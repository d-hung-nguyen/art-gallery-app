import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPiecePreview({ imageSource, title, artist, slug }) {
  return (
    <StyledArtPiecePreview>
      <Image src={imageSource} width={200} height={200} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <Link href={`/art-pieces/${slug}`}>show details</Link>
    </StyledArtPiecePreview>
  );
}
const StyledArtPiecePreview = styled.div`
  margin-bottom: 50px;
`;
