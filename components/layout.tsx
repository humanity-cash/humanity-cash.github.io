import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";

export const siteTitle = "Humanity Cash";

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Head>
				<meta name="description" content="Humanity Cash" />
			</Head>

			<main className={styles.content}>{children}</main>

			<footer className={styles.footer}>
				<div className="row">
					<div className="col-sm-4 d-flex justify-content-center">
						<p>
							<Link href="mailto:social@humanity.cash">Contact us</Link> to find
							out more
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
