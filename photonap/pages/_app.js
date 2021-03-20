import Footer from "components/Footer";
import Header from "components/Header";
import GlobalStyle from "styles/GlobalStyle";

// customized App
export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Header />
			<main style={{ flexGrow: 1, padding: "10rem 0" }}>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}
