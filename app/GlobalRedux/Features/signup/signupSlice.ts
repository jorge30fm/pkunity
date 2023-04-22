"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

const initialState: SignupState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const signupSlice = createSlice({
	name: "signup",
	initialState,
	reducers: {
		setFirstName: (state:SignupState, action: PayloadAction<string>) => {
			state.firstName = action.payload;
		},
		setLastName: (state:SignupState, action: PayloadAction<string>) => {
			state.lastName = action.payload;
		},
		setEmail: (state:SignupState, action: PayloadAction<string>) => {
			state.email = action.payload;
		},
		setPassword: (state:SignupState, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
		setConfimPassword: (state:SignupState, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
});

export const {
	setFirstName,
	setLastName,
	setEmail,
	setPassword,
	setConfimPassword,
} = signupSlice.actions;

export default signupSlice.reducer;
