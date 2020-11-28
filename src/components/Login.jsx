import React from "react";

export default function Login() {
	const [name, setName] = useState("");
	const [error, setError] = useState("");

	handleChangeInput = (event) => {
		setName({ name: event.target.value, error: "" });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (name) {
			onSubmit(name);
		} else {
			setError({
				error: "Please provide a name",
			});
		}
	};

	return (
		<>
			<h1>Please Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					value={name}
					onChange={(event) => handleChangeInput(event)}
					placeholder="Mary Poppins"
				/>
				<button type="submit">Log in</button>
				<p>{error}</p>
			</form>
		</>
	);
}
