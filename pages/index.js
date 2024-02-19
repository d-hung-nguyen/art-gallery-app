import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  const spotlightPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <Spotlight
      imageSource={spotlightPiece.imageSource}
      artist={spotlightPiece.artist}
    />
  );
}
