import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from './mainFeatures.module.css'

interface CardProps {
	logo: React.ReactNode;
	title: string;
	paragraph: string;
}

const Card: React.FC<CardProps> = ({ logo, title, paragraph }) => {
	return (
		<div className={`grid-container mt-4 pt-3 pb-3 pr-3 pl-3 ${styles.card} ${styles.glass}`}>
			{}
			<div
				className={`${styles.logo}`}>
				{logo}
			</div>
			<div className={` col-8`}>
				<h3 className={`${styles.title} `}>{title}</h3>
				<p className={`${styles.desc} `}>{paragraph}</p>
			</div>
			<ArrowForwardIcon className={` col-1 mt-auto mb-auto ${styles.arrowIcon}`}/>
		</div>
	);
};

export default Card;
