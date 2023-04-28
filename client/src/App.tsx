import React from "react";
import { Routes, Route } from "react-router-dom";

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

function App() {
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
					<Route path="/docs" element={<DocsPage />}></Route>
					<Route path="/sheets" element={<Sheets />}></Route>
					<Route path="/forms" element={<Forms />}></Route>
					<Route path="/slides" element={<Slides />}></Route>
				</Route>
				<Route path="/auth">
					<Route path="register" element={<RegisterPage />}></Route>
					<Route path="login" element={<LoginPage />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
