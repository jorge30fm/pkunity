
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import styles from "./signupButtons.module.css";
interface SocialLoginProps {
  provider: 'google' | 'facebook' | 'apple';
}

const SocialLoginComponent: React.FC<SocialLoginProps> = ({ provider }) => {

  let buttonText = '';
  let icon = null;

  if (provider === 'google') {
    buttonText = 'Sign up with Google';
    icon = <FaGoogle/>;
  } else if (provider === 'facebook') {
    buttonText = 'Sign up with Facebook';
    icon = <FaFacebook/>;
  } else if (provider === 'apple') {
    buttonText = 'Sign up with Apple';
    icon = <FaApple/>;
  }

  return (
    <button
      className={` mt-3 mr-auto ml-auto   bg-cream  pt-2 pb-2 pr-2 pl-3 ${styles.socialsBtn}`}
    >
      {icon} {buttonText}
    </button>
  );
};

export default SocialLoginComponent;
