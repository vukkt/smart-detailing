import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Your vehicle deserves the best care.</p>
				<a className="App-link" href="#contact" rel="noopener noreferrer">
					Get a Quote Today!
				</a>
			</header>
		</div>
	);
}

export default App;
