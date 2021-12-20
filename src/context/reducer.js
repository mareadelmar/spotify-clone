export const initialState = {
	user: null,
	playlist: [],
};

export const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case "value":
			return {
				...state,
			};

		default:
			return state;
	}
};
