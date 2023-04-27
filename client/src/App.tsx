import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "@styles/output.css";

import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import DocsPage from "./pages/Docs/Docs";
import TypesLayout from "./components/Layouts/Types";
import Sheets from "./pages/Sheets/Sheets";
import Forms from "./pages/Forms/Forms";
import Slides from "./pages/Slides/Slides";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route element={<TypesLayout />}>
					<Route path="/docs" element={<DocsPage />}></Route>
					<Route path="/sheets" element={<Sheets />}></Route>
					<Route path="/forms" element={<Forms />}></Route>
					<Route path="/slides" element={<DocsPage />}></Route>
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
