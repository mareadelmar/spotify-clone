import { useEffect } from "react";
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
		window.location.hash = "";

		if (_token) {
			spotify.setAccessToken(_token);

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
			spotify.getUserPlaylists().then(res => {
				console.log("playlist", res);
				dispatch({
					type: "SET_PLAYLISTS",
					payload: res,
				});
			});
		}
	}, [dispatch, token]);

	// useEffect(() => {
	// 	if (user) {
	// 	}
	// }, [dispatch]);

	return <div className='App'>{!token ? <Login /> : <UserDashboard />}</div>;
}

export default App;
