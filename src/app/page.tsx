import Image from "next/image";

import londonImage from "../../public/london.jpg";
import overflowedImage from "../../public/overflowed.jpg";
import transitBoardImage from "../../public/transitboard.jpg";

import * as styles from "./page.css";
import * as global_styles from "./_styles/global.css";
import Horizontal_Line from "./_components/Horizontal_Line";

export default function Home() {
	return (
		<main className={styles.display_contents}>
			<p className={styles.hero}>
				I’m a software engineer based in London. I create impactful apps and websites.
			</p>
			<Image
				className={styles.image}
				src={londonImage}
				style={{ objectPosition: "0 30%" }}
				width={400}
				sizes="(max-width: 800px) 25vw, 400px"
				alt=""
			/>
			<Horizontal_Line />
			<p className={global_styles.item()}>
				Welcome to my website! I don’t currently have much use for it other than showcasing some of
				my projects:
			</p>
			<Horizontal_Line />
			<ul className={styles.display_contents}>
				<li className={styles.display_contents}>
					<Image
						className={styles.image}
						src={transitBoardImage}
						width={400}
						sizes="(max-width: 800px) 25vw, 400px"
						alt=""
					/>
					<div className={styles.details}>
						<h2>TransitBoard</h2>
						<p>Miniature departure boards on your phone.</p>
						<a href="https://transitboard.app" target="_blank">
							Coming Soon
						</a>
					</div>
					<Horizontal_Line />
				</li>
				<li className={styles.display_contents}>
					<Image
						className={styles.image}
						src={overflowedImage}
						width={400}
						sizes="(max-width: 800px) 25vw, 400px"
						alt=""
					/>
					<div className={styles.details}>
						<h2>Overflowed</h2>
						<p>Better responsive lists for your apps and websites.</p>
						<a href="https://overflowed.aht.cx" target="_blank">
							Visit Website
						</a>
					</div>
					<Horizontal_Line />
				</li>
			</ul>
			<p className={global_styles.item()}>
				I have many more unfinished projects on my{" "}
				<a href="https://github.com/ahtcx" target="_blank" rel="noreferrer">
					GitHub
				</a>
				.
			</p>
		</main>
	);
}
