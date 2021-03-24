import Footer from "components/Footer";
import Header from "components/Header";
import GlobalStyle from "styles/GlobalStyle";

// customized App
export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css?family=DM Sans"
			></link>
			<Header />
			<main style={{ flexGrow: 1 }}>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}
