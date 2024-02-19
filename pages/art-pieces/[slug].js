import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function PieceDetail({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const piece = pieces.find((p) => p.slug === slug);

  return (
    <div>
      <h1>{slug}</h1>
      <ArtPieceDetails
        imageSource={piece.imageSource}
        title={piece.title}
        artist={piece.artist}
        year={piece.year}
        genre={piece.genre}
      />
    </div>
  );
}
