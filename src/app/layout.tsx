import { Source_Serif_4 } from "next/font/google";

import * as global_styles from "./_styles/global.css";
import * as styles from "./layout.css";

const source_serif_4 = Source_Serif_4({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata = {
	title: "Alexandre Hitchcox",
	description: "My personal site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${styles.body} ${source_serif_4.className}`}>
				<header className={styles.header}>
					<h1>Alexandre Hitchcox</h1>
					<p className={styles.subtitle}>but you can call me Alex :)</p>
				</header>
				{children}
				<footer className={global_styles.item({ padded: true })}>
					You can contact me with hey@[current domain] or via my{" "}
					<a href="https://www.linkedin.com/in/ahtcx" target="_blank" rel="noreferrer">
						LinkedIn
					</a>
					.
				</footer>
			</body>
		</html>
	);
}
