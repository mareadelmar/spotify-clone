import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromResponse } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState("");

	useEffect(() => {
		const hash = getTokenFromResponse();
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);
			window.location.hash = "";
			spotify.setAccessToken(_token);

			spotify.getMe().then(user => console.log("user -->", user));
		}
	}, []);

	return (
		<div className='App'>{token ? <h1>logueadísimx</h1> : <Login />}</div>
	);
}

export default App;
