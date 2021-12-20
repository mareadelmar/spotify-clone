console.log("holis", import.meta.env.VITE_SPOTIFY_ID);

export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize/";
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_ID;
const REDIRECT_URI = "http://localhost:3000/";

// permission scopes
const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initialValue, item) => {
			let keyValue = item.split("=");
			initialValue[keyValue[0]] = decodeURIComponent(keyValue[1]);

			return initialValue;
		}, {});
};
