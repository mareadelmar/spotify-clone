export const initialState = {
	user: null,
	token: null,
	playlist: [],
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

		default:
			return state;
	}
};
