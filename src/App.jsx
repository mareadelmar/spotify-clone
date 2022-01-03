import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromResponse } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useUserData } from "./context/UserContext";
import UserDashboard from "./components/UserDashboard";

const spotify = new SpotifyWebApi();

function App() {
	const [{ token }, dispatch] = useUserData();

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

			dispatch({
				type: "SET_SPOTIFY",
				payload: spotify,
			});

			spotify.getMe().then(res =>
				dispatch({
					type: "GET_USER",
					payload: res,
				})
			);

			spotify.getUserPlaylists().then(res =>
				dispatch({
					type: "SET_PLAYLISTS",
					payload: res.items,
				})
			);

			spotify.getPlaylist("37i9dQZEVXcSvqjG5Dwwab").then(res =>
				dispatch({
					type: "SET_DISCOVER_WEEKLY",
					payload: res,
				})
			);
		}
	}, [token, dispatch]);

	return <div className='App'>{token ? <UserDashboard /> : <Login />}</div>;
}

export default App;
