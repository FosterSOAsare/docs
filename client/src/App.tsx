import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser, setLoading, setError } from "./slices/user.slice";

import "./App.css";
import "@styles/output.css";

import DocsAbout from "./pages/About/Docs";
import SheetsAbout from "./pages/About/Sheets";
import SlidesAbout from "./pages/About/Slides";
import FormsAbout from "./pages/About/Forms";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import DocsPage from "./pages/MainPages/Docs";
import Sheets from "./pages/MainPages/Sheets";
import Forms from "./pages/MainPages/Forms";
import Slides from "./pages/MainPages/Slides";
import ProtectedPage from "./pages/ProtectedPage";
import NoDisplayAfterLogin from "./pages/NoDisplayAfterLogIn";
import NewDoc from "./pages/NewDoc";
import NewForm from "./pages/NewForm";
import NewSheet from "./pages/NewSheet";
import NewSlide from "./pages/NewSlide";

function App() {
	const dispatch = useDispatch<any>();
	useEffect(() => {
		let auth = localStorage.getItem("docs:auth");
		if (auth) {
			dispatch(fetchUser());
			return;
		}
		dispatch(setError("User not found"));
		dispatch(setLoading(false));
	}, []);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<DocsAbout />}></Route>
				<Route>
					<Route path="/docs/about" element={<DocsAbout />}></Route>
					<Route path="/sheets/about" element={<SheetsAbout />}></Route>
					<Route path="/forms/about" element={<FormsAbout />}></Route>
					<Route path="/slides/about" element={<SlidesAbout />}></Route>
				</Route>
				<Route>
					<Route path="/docs">
						<Route index element={<ProtectedPage element={<DocsPage />} />}></Route>
						<Route path="new" element={<ProtectedPage element={<NewDoc />} />}></Route>
					</Route>
				</Route>
				<Route path="/sheets">
					<Route index element={<ProtectedPage element={<Sheets />} />}></Route>
					<Route path="new" element={<ProtectedPage element={<NewSheet />} />}></Route>
				</Route>
				<Route path="/forms">
					<Route index element={<ProtectedPage element={<Forms />} />}></Route>
					<Route path="new" element={<ProtectedPage element={<NewForm />} />}></Route>
				</Route>
				<Route path="/slides">
					<Route index element={<ProtectedPage element={<Slides />} />}></Route>
					<Route path="new" element={<ProtectedPage element={<NewSlide />} />}></Route>
				</Route>

				<Route path="/auth">
					<Route path="register" element={<NoDisplayAfterLogin element={<RegisterPage />} />}></Route>
					<Route path="login" element={<NoDisplayAfterLogin element={<LoginPage />} />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
