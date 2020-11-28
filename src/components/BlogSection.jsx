import { useState, useEffect } from "react";
import React from "react";
import PostList from "./PostList";

export default function BlogSection() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	// state = {
	// 	posts: [],
	// 	loading: true,
	// };

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/")
			.then((res) => res.json())
			.then(
				(posts) => setPosts({ posts: posts }) && setLoading({ loading: false })
			);
	}, []);

	// componentDidMount() {
	// 	fetch("https://jsonplaceholder.typicode.com/posts/")
	// 		.then((res) => res.json())
	// 		.then((posts) => this.setState({ posts: posts, loading: false }));
	// }

	useEffect(() => {
		console.log("Bye!");
	});

	return (
		<div className="App">
			<h1>Welcome, {user}</h1>
			<h2>Here are you favorite articles</h2>
			{loading ? <h1>loading posts</h1> : <PostList posts={posts} />}

			<button onClick={onLogout}>Logout</button>
		</div>
	);
}
