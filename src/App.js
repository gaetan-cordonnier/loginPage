import { useState, useEffect } from "react";
import React from "react";
import "./styles.css";
import BlogSection from "./components/BlogSection";
import Login from "./components/Login";

export default function App() {
	const [user, setUser] = useState("");
	// state = {
	// 	user: "",
	// };

	const handleLogin = setHandleLogin((userName) => {
		setUser({ user: userName });
	});

	const handleLogout = setHandleLogout(() => {
		setUser({ user: "" });
	});

	useEffect((prevProps, prevState) => {
		if (prevState.user !== user) {
			console.log(`User has changed`);
		}
	});

	return (
		<div className="App">
			{user ? (
				<BlogSection user={user} onLogout={handleLogout} />
			) : (
				<>
					<Login onSubmit={handleLogin} />
				</>
			)}
		</div>
	);
}
