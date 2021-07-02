import "../styles/global.css";
import "../styles/colours.css";
import "bootstrap/dist/css/bootstrap.css";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
