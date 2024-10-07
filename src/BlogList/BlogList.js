const blogList = (props) => {
	const blogs = props.blogs;

	console.log(props);

	return (
		<div className="blog-list">
			{blogs.map((blog) => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default blogList;
