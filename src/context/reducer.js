export const initialState = {
	user: null,
	token: null,
	playlists: [],
};

export const reducer = (state, action) => {
	console.log(action);

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

		default:
			return state;
	}
};
