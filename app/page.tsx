import {
	FaChartBar,
	FaPencilAlt,
	FaComment,
	FaUtensils,
	FaNewspaper,
	FaBook,
	FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";

//styles
import styles from "./page.module.css";

//components
import LandingNav from "@/components/layout/LandingNav/LandingNav";
import Footer from "@/components/layout/Footer/Footer";
import Card from "@/components/ui/cards/mainFeatures/mainFeatures";
import Button from "@/components/ui/button/Button";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
	const cardsData = [
		{
			logo: <FaChartBar />,
			title: "Track",
			paragraph:
				"Monitor and track daily food intake and PHE levels for effective PKU management.",
		},
		{
			logo: <FaPencilAlt />,
			title: "Post",
			paragraph:
				"Share posts and images in a newsfeed to stay updated with the latest community updates.",
		},
		{
			logo: <FaComment />,
			title: "Chat",
			paragraph:
				"Connect and interact with other users through real-time chat. Build your community!",
		},
		{
			logo: <FaUtensils />,
			title: "Cook",
			paragraph:
				"Explore a collection of PKU-friendly recipes, contribute your own, and discover new meal options.",
		},
		{
			logo: <FaNewspaper />,
			title: "News",
			paragraph:
				"Stay informed with the latest PKU news and access relevant articles for up-to-date information.",
		},
		{
			logo: <FaBook />,
			title: "Logbook",
			paragraph:
				"Find information about protein content in foods to help with meal and levels tracking",
		},
	];

	return (
		<main className="color-dark">
			<LandingNav />
			{/* Hero Section */}
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
				<div className={`flex justify-center mt-4`}>
					<Link href="/signup">
						<Button padding=".5em 4em">Join our Community!</Button>
					</Link>
				</div>
			</section>
			{/* Main Features Section */}
			<section className={styles.landingSection}>
				<div className={`bg-cream pt-3 pb-3 pr-4 pl-4 ${styles.card}`}>
					<h2 className="text-center">What is PKU?</h2>
					<p className={`color-rust mt-2 ${styles.whatIsPKU}`}>
						Phenylketonuria (PKU) is a genetic disorder that prevents the body
						from breaking down an amino acid called phenylalanine.
						<br />
						<br />
						This amino acid is found in many foods, including milk, eggs, and
						meat. If left untreated, PKU can lead to intellectual disabilities,
						seizures, and other serious health problems. However, with early
						detection and careful management, people with PKU can live healthy
						and productive lives.
					</p>
					<div className="flex justify-end">
						<Link href="#">
							<Button padding=".5em 1em">
								Learn More <FaArrowRight />
							</Button>
						</Link>
					</div>
				</div>
				{cardsData.map((card, index) => (
					<Card
						key={index}
						logo={card.logo}
						title={card.title}
						paragraph={card.paragraph}
					/>
				))}
			</section>
			<Footer />
		</main>
	);
};
export default Home;
