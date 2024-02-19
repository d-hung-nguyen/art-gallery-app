import ArtPieces from "@/components/ArtPieces";
import Nav from "@/components/Nav";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Art Gallery</h1>
      <Nav />
      <ArtPieces pieces={data} />
    </div>
  );
}
