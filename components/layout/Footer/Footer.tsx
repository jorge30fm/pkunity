import Link from "next/link";
import Image from "next/image";
import classes from "./Footer.module.css";

function Footer() {
	return (
		<footer>
			<div>
				<div>Logo</div>
				<h1>PKUnity</h1>
				<div>
					<ul>
						<li>Charlotte, NC</li>
						<li>info@pkunity.com</li>
					</ul>
				</div>
				<Link href="/signup">Create an account</Link>
				<div>
					<h2>QUICK LINKS</h2>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/">About</Link>
						</li>
						<li>
							<Link href="/">Dashboard</Link>
						</li>
						<li>
							<Link href="/">Account</Link>
						</li>
						<li>
							<Link href="/">Contact</Link>
						</li>
					</ul>
				</div>
				<div>
					<h2>GET INVOLVED</h2>
					<ul>
						<li>
							<Link href="/">Contribute</Link>
						</li>
						<li>
							<Link href="/">Feedback</Link>
						</li>
						<li>
							<Link href="/">Donate</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
