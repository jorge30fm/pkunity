"use client";
//Manage state imports
import { useState } from "react";
import type { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
	setFirstName,
	setLastName,
	setEmail,
	setConfimPassword,
} from "../GlobalRedux/Features/signup/signupSlice";
// components
import SignupButtons from "@/components/ui/signupButtons/signupButtons";
import Button from "@/components/ui/button/Button";
import Logo from "@/components/logo/Logo";
// styles
import styles from "./page.module.css";
// Icons
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

const SignupPage = () => {
	const dispatch = useDispatch();
	const [formValues, setFormValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
		console.log(`${name}: ${value}`);
	};
	const handleSubmit = (event: any) => {
		event.preventDefault();
		dispatch(setFirstName(formValues.firstName));
		dispatch(setLastName(formValues.lastName));
		dispatch(setEmail(formValues.email));
		dispatch(setConfimPassword(formValues.confirmPassword));
		console.log("Form submitted with values: ", formValues);
	};

	const { firstName, lastName, email, password, confirmPassword } = useSelector(
		(state: RootState) => state.signup
	);

	return (
		<div className="bg-forest-green">
			<div className={`grid-container pt-4 ${styles.section}`}>
				<span className="col-12 ml-auto mr-auto">
					<Logo
						width="7rem"
						height="7rem"
					/>
				</span>
				{/* social media sign up buttons */}
				<div className={`col-12 ${styles.socialsBtns}`}>
					<SignupButtons provider="apple" />
					<SignupButtons provider="google" />
					<SignupButtons provider="facebook" />
				</div>
				{/* adds a horizontal line with the word 'or' in the middle */}
				<div
					className={`col-12 flex justify-center ml-4 mr-4 ${styles.division}`}
				>
					<div className={` col-5 flex align-center ${styles.lineContainer}`}>
						<div className={`${styles.line}`}></div>
					</div>
					<p className={` col-1 text-center ${styles.or}`}>or</p>
					<div
						className={` col-5 flex align-center mr-auto ${styles.lineContainer}`}
					>
						<div className={`${styles.line}`}></div>
					</div>
				</div>
			</div>
			<form
				onSubmit={handleSubmit}
				className=" ml-4 mr-4 pl-4 pr-4 mt-2"
			>
				{/* first and last name */}
				<div className="grid-container no-gap col-12">
					<label className={`col-12  ${styles.label}`}>Name</label>

					<div
						className={`flex justify-center align-center col-5 ${styles.inputWrapper}`}
					>
						<FaUserAlt className={`${styles.icon} ml-2`} />
						<input
							type="text"
							placeholder="First"
							className={`w-100 ${styles.formInput}`}
							name="firstName"
							value={formValues.firstName}
							onChange={handleChange}
						/>
					</div>
					<div
						className={`flex justify-center align-center col-6 start-7 ${styles.inputWrapper}`}
					>
						<input
							type="text"
							placeholder="Last"
							className={`w-75 ${styles.formInput}`}
							name="lastName"
							value={formValues.lastName}
							onChange={handleChange}
						/>
					</div>
				</div>
				{/* email */}
				<div className="grid-container no-gap col-12">
					<label className={`col-12 ${styles.label}`}>Email</label>
					<div
						className={`flex justify-between align-center col-12 ${styles.inputWrapper}`}
					>
						<FaEnvelope className={`${styles.icon} ml-2`} />
						<input
							type="text"
							placeholder="Email"
							className={`${styles.formInput}`}
							name="email"
							value={formValues.email}
							onChange={handleChange}
						/>
					</div>
				</div>
				{/* password */}
				<div className="grid-container no-gap col-12 in">
					<label className={`col-12 ${styles.label}`}>Password</label>
					<div
						className={`flex justify-between align-center col-12 ${styles.inputWrapper}`}
					>
						<FaLock className={`${styles.icon} ml-2`} />
						<input
							type="password"
							placeholder="Password"
							className={`col-12 ${styles.formInput}`}
							name="password"
							value={formValues.password}
							onChange={handleChange}
						/>
					</div>
				</div>
				{/* confirm password */}
				<div className="grid-container no-gap col-12">
					<label className={`col-12 ${styles.label}`}>Confirm Password</label>
					<div
						className={`flex justify-between align-center col-12 ${styles.inputWrapper}`}
					>
						<FaLock
							color="rgba(0, 0, 0, 0.5)"
							className={`${styles.icon} ml-2`}
						/>
						<input
							type="password"
							placeholder="Confirm Password"
							className={`col-12 ${styles.formInput}`}
							name="confirmPassword"
							value={formValues.confirmPassword}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="mr-auto ml-auto mt-3 ">
					<Button
						padding=".8em 2em"
						fontSize="1.2rem"
					>
						Sign up
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignupPage;
