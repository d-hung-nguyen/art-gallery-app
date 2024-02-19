import Nav from "@/components/Nav";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const spotlightPiece = data[Math.floor(Math.random() * data.length)];

  return (
    <div>
      <h1>Art Gallery</h1>
      <Nav />
      {/* <ArtPieces pieces={spotlightPiece} /> */}
      <Spotlight
        imageSource={spotlightPiece.imageSource}
        artist={spotlightPiece.artist}
      />
    </div>
  );
}
