import { useState } from "react";
import "./home.css";
import BlogList from "../BlogList/BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
		{
			title: "New party in town",
			body: "lorem ipsum...",
			author: "luigi",
			id: 2,
		},
		{
			title: "Computer Scientist here!",
			body: "lorem ipsum...",
			author: "yoshi",
			id: 3,
		},
	]);

	return (
		<div className="home">
			<h2>Homepage</h2>
			<BlogList blogs={blogs} />
		</div>
	);
};

export default Home;
