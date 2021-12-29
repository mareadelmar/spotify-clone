import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromResponse } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useUserData } from "./context/UserContext";
import UserDashboard from "./components/UserDashboard";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useUserData();

	useEffect(() => {
		const hash = getTokenFromResponse();
		const _token = hash.access_token;

		if (_token) {
			spotify.setAccessToken(_token);
			window.location.hash = "";

			dispatch({
				type: "SET_TOKEN",
				payload: _token,
			});

			spotify.getMe().then(userData => {
				dispatch({
					type: "GET_USER",
					payload: userData,
				});
			});
		}
	}, []);

	useEffect(() => {
		if (token) {
			spotify.getUserPlaylists().then(res => {
				console.log("playlist", res);
				dispatch({
					type: "SET_PLAYLISTS",
					payload: res,
				});
			});
		}
	}, [token]);

	console.log("user -->", user);

	console.log("token -->", token);
	return <div className='App'>{token ? <UserDashboard /> : <Login />}</div>;
}

export default App;
