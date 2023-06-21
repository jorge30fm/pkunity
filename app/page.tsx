"use client";
import {
	FaChartBar,
	FaPencilAlt,
	FaComment,
	FaUtensils,
	FaNewspaper,
	FaBook,
	FaArrowRight,
} from "react-icons/fa";
import {
	Analytics as AnalyticsIcon,
	Create as CreateIcon,
	Chat as ChatIcon,
	Restaurant as RestaurantIcon,
	Newspaper as NewspaperIcon,
	TableChart as TableChartIcon,
} from "@mui/icons-material";
//styles
import styles from "./page.module.css";

//components
import LandingNav from "@/components/layout/LandingNav/LandingNav";
import Footer from "@/components/layout/Footer/Footer";
import Card from "@/components/ui/cards/mainFeatures/mainFeatures";

// mui components
import { Container, Button, Typography, Box } from "@mui/material";
import { primaryLight, white } from "../config/mui/themes";
import { useTheme } from "@mui/material/styles";

const Home = () => {
	const theme = useTheme();

	const cardsData = [
		{
			logo: <AnalyticsIcon sx={{fontSize:'4em'}}/>,
			title: "Track",
			paragraph:
				"Monitor and track daily food intake and PHE levels for effective PKU management.",
		},
		{
			logo: <CreateIcon sx={{fontSize:'4em'}}/>,
			title: "Post",
			paragraph:
				"Share posts and images in a newsfeed to stay updated with the latest community updates.",
		},
		{
			logo: <ChatIcon sx={{fontSize:'4em'}}/>,
			title: "Chat",
			paragraph:
				"Connect and interact with other users through real-time chat. Build your community!",
		},
		{
			logo: <RestaurantIcon sx={{fontSize:'4em'}}/>,
			title: "Cook",
			paragraph:
				"Explore a collection of PKU-friendly recipes, contribute your own, and discover new meal options.",
		},
		{
			logo: <NewspaperIcon sx={{fontSize:'4em'}}/>,
			title: "News",
			paragraph:
				"Stay informed with the latest PKU news and access relevant articles for up-to-date information.",
		},
		{
			logo: <TableChartIcon sx={{fontSize:'4em'}}/>,
			title: "Logbook",
			paragraph:
				"Find information about protein content in foods to help with meal and levels tracking",
		},
	];

	return (
		<main>
			<LandingNav />
			{/* Hero Section */}
			<Container
				maxWidth="xl"
				sx={{
					backgroundImage: `url('./hero.jpg')`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
					height: "350vh",
					padding: "2rem, 0, 0, 0",
				}}
			>
				{/* Main titles of the landing page */}
				<Box pt={4}>
					<Typography
						variant="h1"
						fontWeight="bold"
						pt={4}
						pl={2}
						sx={{ color: white }}
					>
						PKUnity
					</Typography>
					<Typography
						variant="h2"
						pl={2}
						fontWeight="bold"
						sx={{ color: white }}
					>
						Your PKU Journey Companion
					</Typography>
					{/* call to action */}
					<Typography
						mt={4}
						pl={2}
						pr={2}
						className={styles.overlay}
					>
						Managing PKU can be a challenging journey, but you are not alone. We
						are here to provide you with the resources and support you need to
						navitate your PKU journey with ease.
						<br></br>
						<br></br>Join us today and discover a community of support and
						understnding where you can thrive.
					</Typography>
				</Box>
				{/* call to action button */}
				<Box
					mt={3}
					display="flex"
					justifyContent="center"
				>
					<Button
						color="secondary"
						variant="contained"
						size="large"
					>
						Join our Community!
					</Button>
				</Box>
				{/* empty box to adjust positioning for the next element */}
				<Box sx={{ height: "29rem" }}></Box>
				{/* PKU information element */}
				<Box className={` pt-3 pb-3 pr-4 pl-4 ${styles.card} ${styles.glass}`}>
					<Typography
						variant="h2"
						color="white"
						className="text-center"
					>
						What is PKU?
					</Typography>
					<Typography
						pt={1}
						color="white"
						className={` mt-2 ${styles.whatIsPKU} `}
					>
						Phenylketonuria (PKU) is a genetic disorder that prevents the body
						from breaking down an amino acid called phenylalanine.
						<br />
						<br />
						This amino acid is found in many foods, including milk, eggs, and
						meat. If left untreated, PKU can lead to intellectual disabilities,
						seizures, and other serious health problems. However, with early
						detection and careful management, people with PKU can live healthy
						and productive lives.
					</Typography>
					<Box
						mt={3}
						display="flex"
						justifyContent="center"
					>
						<Button
							color="secondary"
							variant="contained"
							size="large"
						>
							Learn More
						</Button>
					</Box>
				</Box>
				{/* empty box to adjust positioning for the next element */}
				<Box sx={{ height: "10rem" }}></Box>
				<Box>
					{cardsData.map((card, index) => (
						<Card
							key={index}
							logo={card.logo}
							title={card.title}
							paragraph={card.paragraph}
						/>
					))}
				</Box>
				{/* empty box to adjust positioning for the next element */}

				<Box
					mt={15}
					pl={2}
					pr={2}
				>
					<Typography
						variant="h3"
						sx={{ color: "white", textAlign: "center" }}
					>
						You are a
					</Typography>
					<Typography
						mt={1}
						mb={2}
						variant="h2"
						sx={{ color: "white", textAlign: "center" }}
					>
						WARRIOR.
					</Typography>
					<Typography
						mt={1}
						variant="h4"
						sx={{ color: "white", textAlign: "center" }}
					>
						PKU is just a part of your incredible journey.
					</Typography>
					<Box
						mt={2}
						display="flex"
						justifyContent="center"
					>
						<Button
							variant="contained"
							sx={{ mr: "auto", ml: "auto" }}
							href="/signup"
						>
							<Typography sx={{ color: "white", textAlign: "center" }}>
								Join us and share your story
							</Typography>
						</Button>
					</Box>
				</Box>
			</Container>
			{/* Main Features Section */}

			<Footer />
		</main>
	);
};
export default Home;
