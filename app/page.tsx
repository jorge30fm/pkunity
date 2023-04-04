import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import LandingNav from "../components/layout/LandingNav/LandingNav";
import Footer from "../components/layout/Footer/Footer"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<LandingNav />
			<section className={styles.landingSection}>
				<h1 className={styles.mainHeading}>PKUnity:</h1>
				<h2 className={styles.moto}>Your PKU Journey Companion</h2>
				<p>
					Welcome to PKUnity, your PKU journey companion. We understand that
					managing PKU can be a challenging journey, but you are not alone. We
					are here to provide you with the resources and support you need to
					navitate your PKU journey with ease. Our website is a place where you
					can connect with others in the PKU community, track your levels, log
					your food and protein intake, view and create recipes, amd ,more. Join
					us today and discover a community of support and understnding where
					you can thrive.
				</p>
				<div className={`flex justify-center mt-4`}><Link href="/signup" className={`${styles.ctaBtn} btn`}>Join our Community!</Link></div>
			</section>
      <section></section>
      <Footer />
		</main>
	);
}
