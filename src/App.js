import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";

function App() {
	const title = "Welcome to the new blog";

	return (
		<div className="App">
			<Navbar />
			<div className="content">
				<Home />
			</div>
			<p>{title}</p>
		</div>
	);
}

export default App;
