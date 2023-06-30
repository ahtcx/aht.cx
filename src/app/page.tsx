import Image from "next/image";

import londonImage from "../../public/london.jpg";
import overflowedImage from "../../public/overflowed.jpg";
import transitBoardImage from "../../public/transitboard.jpg";

import * as styles from "./page.css";
import * as global_styles from "./_styles/global.css";

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
				alt=""
				width={400}
			/>
			<p className={global_styles.item()}>
				Welcome to my website! I don’t currently have much use for it other than showcasing some of
				my projects:
			</p>
			<ul className={styles.display_contents}>
				<li className={styles.display_contents}>
					<Image
						className={styles.image}
						src={transitBoardImage}
						style={{ objectPosition: "0 35%" }}
						alt=""
						width={400}
					/>
					<div className={styles.details}>
						<h2>TransitBoard</h2>
						<p>Miniature departure boards on your phone.</p>
						<a href="https://transitboard.app" target="_blank">
							Website Coming Soon
						</a>
					</div>
				</li>
				<li className={styles.display_contents}>
					<Image className={styles.image} src={overflowedImage} alt="" width={400} />
					<div className={styles.details}>
						<h2>Overflowed</h2>
						<p>Better responsive lists for your apps and websites.</p>
						<a href="https://overflowed.aht.cx" target="_blank">
							Visit Website
						</a>
					</div>
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
