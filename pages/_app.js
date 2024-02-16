import GlobalStyle from "../styles";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {
      ...pageProps} 
        />
        {/* <Nav/> */}
    </>
  );
}
