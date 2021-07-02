import Head from "next/head";
import styles from "./layout.module.css";
import Link from "next/link";
// import Image from "next/image";

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

					{/* <div className="col-sm-1 d-flex justify-content-center">
						<p>
							Supported by
						</p>
					</div>

					<div className="col-sm-1 d-flex justify-content-center">						
						
						<Link href="https://keyko.io/">
							<a>
								<Image
									src="/images/keyko_logo_whitetype.svg"
									width={77}
									height={38}
									alt="Keyko"
								/>
							</a>
						</Link>
					</div>

					<div className="col-sm-1 d-flex justify-content-center">
						<Link href="https://celo.org/">
							<a>
								<Image
									src="/images/Celo Logo Package/Monochrome Logo Reverse/Celo Logo Monochrome Reverse.png"
									width={75}
									height={30}
									alt="Celo"
								/>
							</a>
						</Link>
					</div> */}
				</div>
			</footer>
		</div>
	);
}
