import { useState } from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
	const [count, setCount] = useState(0);

	console.log(import.meta.env.VITE_SPOTIFY_ID);
	return (
		<div className='App'>
			<Login />
		</div>
	);
}

export default App;
