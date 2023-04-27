import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "@styles/output.css";

import Homepage from "./pages/Homepage";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
				<Route path="/auth">
					<Route path="register" element={<RegisterPage />}></Route>
					<Route path="login" element={<LoginPage />}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
