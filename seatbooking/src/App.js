import "./App.css";
import NewHomePage from "./Components/NewHomePage";
import { useEffect, useState } from "react";
import useStart from "./Components/Start";
import StartingIndicater from "./Components/StartingIndicator";

function App() {
	const { ready } = useStart(2000);
	const [shouldMount, setShouldMount] = useState(true);

	useEffect(() => {
		function handleScroll() {
			const scrollPosition = 140 + window.innerHeight + window.pageYOffset;
			const documentHeight = document.body.offsetHeight;
			if (scrollPosition >= documentHeight) {
				setShouldMount(false);
			} else {
				setShouldMount(true);
			}
		}
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<>
			{ready !== true ? (
				<div className="App">
					<StartingIndicater />
				</div>
			) : (
				<div className="App">
					<NewHomePage />
				</div>
			)}
		</>
	);
}

export default App;
