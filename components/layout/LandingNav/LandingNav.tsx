import Link from 'next/link';
import Image from 'next/image';
import styles from './LandingNav.module.css'
import {FaBars} from 'react-icons/fa'

function LandingNav() {
    return (
        <nav className={`${styles.nav} `}>
            <ul className='grid-container pt-3 pr-3 pb-3 pl-3'>
                <li className='col-4 start-1'><button className='btn'>Sign Up</button></li>
                <li className='col-2 start-6 text-center'><Image src="/logo.svg" width="100" height="100" alt=""/></li>
                <li className='col-1 start-12'><FaBars className={styles.burgerMenu} /></li>
            </ul>
        </nav>
    )
}
//q: how to add svg file saved in public folder
// a: https://stackoverflow.com/questions/62640609/how-to-add-svg-file-saved-in-public-folder
// a: https://stackoverflow.com/questions/62640609/how-to-add-svg-file-saved-in-public-folder   <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
export default LandingNav;