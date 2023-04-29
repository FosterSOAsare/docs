import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { logInUser, userTypes, useUserSlice } from "../slices/user.slice";

import { loginSchema } from "../lib/react-hook-forms";

const LoginPage = () => {
	const user: userTypes = useSelector(useUserSlice);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: zodResolver(loginSchema) });

	useEffect(() => {
		let errArray = Array.from(Object.keys(errors));
		if (errArray?.length) {
			let message: any = errors[errArray[0]]?.message;
			toast.error(message, { autoClose: 3000 });
		}
	}, [errors]);
	async function submit(data: any) {
		let fn: any = logInUser(data);
		await dispatch(fn);
	}

	useEffect(() => {
		if (user.error) {
			toast.error(user.error, { autoClose: 3000 });
		}

		if (user.user.email && user.user._id) {
			toast.success("Login successful", { autoClose: 3000 });
			setTimeout(() => {
				navigate("/");
			}, 3000);
		}
	}, [user]);
	return (
		<>
			<ToastContainer />
			<section className="w-full h-[100vh] flex flex-col items-center justify-center">
				<div className="w-full max-w-[500px] border-[2px] border-slate-200 h-[70vh] rounded-[5px] p-[10px] flex flex-col items-center justify-center">
					<h3 className="text-2xl font-bold mb-[5px]">Welcome back</h3>
					<p className="opacity-70 mb-6">Enter your credentials to login</p>
					<div className="w-[70%] mb-[15px] h-auto">
						<label htmlFor="email" className="block mb-[5px]">
							Enter your email
						</label>
						<input
							type="text"
							id="email"
							{...register("email")}
							className="w-full h-[40px] focus:outline-0 px-2 mb-2 rounded-[5px] border-[1px] border-slate-200"
							placeholder="info@gmail.com"
						/>
					</div>
					<div className="w-[70%] mb-[15px] h-auto">
						<label htmlFor="password" className="block mb-[5px]">
							Enter your password
						</label>
						<input
							type="password"
							{...register("password")}
							id="password"
							className="w-full h-[40px] focus:outline-0 px-2 mb-2 rounded-[5px] border-[1px] border-slate-200"
							placeholder="**********"
						/>
					</div>

					<button
						onClick={handleSubmit(submit)}
						className={`w-[70%] h-10 ${user.loading ? "bg-slate-200 text-black" : "bg-green-700 text-white"}  rounded-[5px] mb-4`}
						disabled={user.loading}>
						{!user.loading ? "Login" : "Waiting..."}
					</button>

					<div>OR</div>
					<button className="w-[70%] h-10 bg-black text-white rounded-[5px] mt-4">Login With Google</button>
					<p className="text-xs mt-2 font-medium">
						Don't have an account ,{" "}
						<Link to="/auth/register" className="text-blue-400 underline">
							Sign Up
						</Link>
					</p>
				</div>
			</section>
		</>
	);
};

export default LoginPage;
