import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "@styles/output.css";

import Homepage from "./pages/Homepage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
