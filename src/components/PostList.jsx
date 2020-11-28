import React from "react";

export default function PostList({ posts }) {
	return (
		<ul>
			{posts.slice(0, 5).map((post) => {
				return <li key={post.title}>{post.title}</li>;
			})}
		</ul>
	);
}
