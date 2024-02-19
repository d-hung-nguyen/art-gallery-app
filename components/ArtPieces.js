import ArtPiecePreview from "./ArtPiecePreview";

// const StyledArtPiecePreview = styled.div`
//   bottom: 0;
//   border: 1px solid red;
//   background-color: red;
// `;

export default function ArtPieces({ pieces }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          imageSource={piece.imageSource}
          title={piece.name}
          artist={piece.artist}
        />
      ))}
    </div>
  );
}
