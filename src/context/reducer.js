export const initialState = {
	user: null,
	token: null,
	playlists: [],
	spotify: null,
	discover_weekly: null,
};

export const reducer = (state, action) => {
	console.log("action -->", action, typeof action.payload);

	switch (action.type) {
		case "GET_USER":
			return {
				...state,
				user: action.payload,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.payload,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.payload,
			};
		case "SET_SPOTIFY":
			return {
				...state,
				spotify: action.payload,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.payload,
			};

		default:
			return state;
	}
};
