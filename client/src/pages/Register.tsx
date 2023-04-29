import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useUserSlice, userTypes, setLoading } from "../slices/user.slice";

import axiosInstance from "../lib/axios";
type userData = {
	email: String;
	password: String;
};

import { registerSchema } from "../lib/react-hook-forms";

const RegistrationPage = () => {
	const user: userTypes = useSelector(useUserSlice);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: zodResolver(registerSchema) });
	const navigate = useNavigate();

	useEffect(() => {
		let errArray = Array.from(Object.keys(errors));
		if (errArray?.length) {
			let message: any = errors[errArray[0]]?.message;
			toast.error(message, { autoClose: 3000 });
		}
	}, [errors]);
	async function submit(data: any) {
		try {
			if (data.confirmpassword !== data.password) {
				toast.error("Passwords do not match", { autoClose: 3000 });
				return;
			}
			dispatch(setLoading(true));

			// Make request and redirect to login page
			let response = await axiosInstance({
				method: "POST",
				url: "/auth/local",
				data: { ...data, provider: "local" },
			});
			toast.success("Account successfully created", { autoClose: 1000 });
			setTimeout(() => {
				toast("Redirecting to login page...", { autoClose: 1000 });
				setTimeout(() => {
					dispatch(setLoading(false));
					navigate("/auth/login");
				}, 1700);
			}, 2000);

			// Will Add Verification page
		} catch (e: any) {
			dispatch(setLoading(false));
			toast.warn(e?.response?.data?.error, { autoClose: 3000 });
		}
	}

	return (
		<>
			<ToastContainer />
			<section className="w-full h-[100vh] flex flex-col items-center justify-center">
				<div className="w-full max-w-[500px] border-[2px] border-slate-200 h-[80vh] rounded-[5px] p-[10px] flex flex-col items-center justify-center">
					<h3 className="text-2xl font-bold mb-[5px]">Register An Account</h3>
					<p className="opacity-70 mb-6">Enter your credentials to create an account</p>
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
					<div className="w-[70%] mb-[15px] h-auto">
						<label htmlFor="confirmpassword" className="block mb-[5px]">
							Confirm your password
						</label>
						<input
							type="password"
							{...register("confirmpassword")}
							id="confirmpassword"
							className="w-full h-[40px] focus:outline-0 px-2 mb-2 rounded-[5px] border-[1px] border-slate-200"
							placeholder="**********"
						/>
					</div>

					{
						<button onClick={handleSubmit(submit)} className={`w-[70%] h-10 ${user.loading ? "bg-slate-200 text-black" : "bg-green-700 text-white"} rounded-[5px] mb-4`}>
							{!user.loading ? "Sign Up" : "Waiting..."}
						</button>
					}
					<div>OR</div>
					<button className="w-[70%] h-10 bg-black text-white rounded-[5px] mt-4">Sign Up With Google</button>
					<p className="text-xs mt-2 font-medium">
						Already have an account ,{" "}
						<Link to="/auth/login" className="text-blue-400 underline">
							Login
						</Link>
					</p>
				</div>
			</section>
		</>
	);
};

export default RegistrationPage;
