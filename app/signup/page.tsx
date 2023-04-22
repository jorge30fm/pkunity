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
import Logo from "@/components/logo/Logo";
// styles
import styles from "./page.module.css";

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
		<div className={`grid-container pt-4 bg-forest-green ${styles.section}`}>
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

			<form
				onSubmit={handleSubmit}
				className="grid-container col-12"
			>
				{/* first and last name */}
				<div className="grid-container col-12">
					<label className="col-6">
						First Name
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={formValues.firstName}
							onChange={handleChange}
						/>
					</label>
					<label className="col-6">
						Last Name
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={formValues.lastName}
							onChange={handleChange}
						/>
					</label>
				</div>
				{/* email */}
				<div className="col-12">
					<label>
						Email
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={formValues.email}
							onChange={handleChange}
						/>
					</label>
				</div>
				{/* password */}
				<div className="col-12">
					<label>
						Password
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={formValues.password}
							onChange={handleChange}
						/>
					</label>
				</div>
				{/* confirm password */}
				<div className="col-12">
					<label>
						Confirm Password
						<input
							type="password"
							placeholder="Confirm Password"
							name="confirmPassword"
							value={formValues.confirmPassword}
							onChange={handleChange}
						/>
					</label>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default SignupPage;
