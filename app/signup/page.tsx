"use client";
import * as React from "react";
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

// internal components
import SignupButtons from "@/components/ui/signupButtons/signupButtons";
import Logo from "@/components/logo/Logo";

//external components
import {
	Grid,
	Button,
	Box,
	TextField,
	FormControl,
	InputAdornment,
	IconButton,
} from "@mui/material";

// styles
import styles from "./page.module.css";

// Icons
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const SignupPage = () => {
	//manage textfields state
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
	// password visibility
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	return (
		<Grid
			sx={{
				backgroundImage: `url("./gradient.jpg")`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "start",
				backgroundSize: "cover",
				height: "100vh",
			}}
			pt={4}
		>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
			>
				<Grid item>
					<Box
						sx={{
							width: "7em",
							height: "7em",
							backgroundColor: "primary.main",
							borderRadius: "50%",
						}}
					/>
				</Grid>
				{/* social media sign up buttons */}
				<Grid item>
					<SignupButtons provider="apple" />
					<SignupButtons provider="google" />
					<SignupButtons provider="facebook" />
				</Grid>
			</Grid>
			<Box
				mt={3}
				p={2}
				className={styles.formContainer}
				mr={2}
				ml={2}
				pt={2}
			>
				<FormControl
					component="form"
					onSubmit={handleSubmit}
				>
					{/* first and last name */}
					<Grid
						container
						justifyContent="space-between"
						spacing={2}
					>
						<Grid
							item
							xs={6}
						>
							<TextField
								required
								variant="outlined"
								id="firstName"
								label="First Name"
								placeholder="First Name"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<FaUserAlt />
										</InputAdornment>
									),
								}}
								name="firstName"
								value={formValues.firstName}
								onChange={handleChange}
							/>
						</Grid>
						<Grid
							item
							xs={6}
						>
							<TextField
								required
								variant="outlined"
								id="lastName"
								label="Last Name"
								placeholder="Last Name"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<FaUserAlt />
										</InputAdornment>
									),
								}}
								name="lastName"
								value={formValues.lastName}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Grid
						container
						justifyContent="space-around"
						rowSpacing={2}
						mt={1}
					>
						{/* email */}
						<Grid
							item
							xs={12}
						>
							<TextField
								required
								fullWidth
								variant="outlined"
								type="email"
								id="email"
								label="Email"
								placeholder="Email"
								helperText="Enter a valid email."
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<FaUserAlt />
										</InputAdornment>
									),
								}}
								name="email"
								value={formValues.email}
								onChange={handleChange}
							/>
						</Grid>
						{/* password[] */}
						<Grid
							item
							xs={12}
						>
							<TextField
								required
								fullWidth
								variant="outlined"
								type="password"
								id="password"
								label="Password"
								placeholder="Password"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<FaUserAlt />
										</InputAdornment>
									),
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
								name="password"
								value={formValues.password}
								onChange={handleChange}
							/>
						</Grid>
						{/* confirm password */}
						<Grid
							item
							xs={12}
						>
							<TextField
								required
								fullWidth
								variant="outlined"
								type="password"
								id="confirmPassword"
								label="Confirm Password"
								placeholder="Confirm Password"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<FaUserAlt />
										</InputAdornment>
									),
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
								name="confirmPassword"
								value={formValues.confirmPassword}
								onChange={handleChange}
							/>
						</Grid>
						{/* sign up button */}
						<Grid
							item
							xs={6}
							mt={2}
						>
							<Button
								color="secondary"
								sx={{ width: "100%" }}
								variant="contained"
								size="large"
							>
								Sign up
							</Button>
						</Grid>
					</Grid>
				</FormControl>
			</Box>
		</Grid>
	);
};

export default SignupPage;
