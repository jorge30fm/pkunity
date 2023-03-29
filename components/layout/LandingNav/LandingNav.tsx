import Link from 'next/link';
import Image from 'next/image';
import styles from './LandingNav.module.css'
import {FaBars} from 'react-icons/fa'

function LandingNav() {
    return (
        <nav className={`${styles.nav} `}>
            <ul className='grid-container pr-1 pl-1'>
                <li className='col-4 start-1'><button className='btn'>Sign Up</button></li>
                <li className='col-2 start-6 text-center'>Logo</li>
                <li className='col-1 start-12'><FaBars /></li>
            </ul>
        </nav>
    )
}
// <nav>
{/* <ul>
<li><button className ="btn">Sign Up</button></li>
<li>Logo</li>
<li><li>
</ul>
</nav> */}

export default LandingNav;