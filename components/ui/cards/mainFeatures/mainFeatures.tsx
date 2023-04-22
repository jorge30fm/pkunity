import { FaArrowRight } from "react-icons/fa";
import styles from './mainFeatures.module.css'

interface CardProps {
	logo: React.ReactNode;
	title: string;
	paragraph: string;
}

const Card: React.FC<CardProps> = ({ logo, title, paragraph }) => {
	return (
		<div className={`grid-container bg-cream mt-4 pt-3 pb-3 pr-3 pl-3 ${styles.card}`}>
			{}
			<div
				className={` col-3 mt-auto mb-auto ${styles.logo}`}>
				{logo}
			</div>
			<div className={` col-8`}>
				<h3 className={`${styles.title} color-dark`}>{title}</h3>
				<p className={`${styles.desc} color-rust`}>{paragraph}</p>
			</div>
			<FaArrowRight className={` col-1 mt-auto mb-auto ${styles.arrowIcon}`}/>
		</div>
	);
};

export default Card;
