import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromResponse } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { userUserData } from "./context/UserContext";
import UserDashboard from "./components/UserDashboard";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = userUserData();

	useEffect(() => {
		const hash = getTokenFromResponse();
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				payload: _token,
			});

			window.location.hash = "";
			spotify.setAccessToken(_token);

			spotify.getMe().then(userData => {
				dispatch({
					type: "GET_USER",
					payload: userData,
				});
			});

			spotify.getUserPlaylists.then(res => {
				dispatch({
					type: "SET_PLAYLISTS",
					payload: res,
				});
			});
		}
	}, []);

	console.log("user -->", user);

	console.log("token -->", token);
	return <div className='App'>{token ? <UserDashboard /> : <Login />}</div>;
}

export default App;
