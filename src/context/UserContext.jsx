import { createContext, useContext, useReducer } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ initialState, reducer, children }) {
	return (
		<UserContext.Provider value={useReducer(reducer, initialState)}>
			{children}
		</UserContext.Provider>
	);
}

export const userUserData = () => useContext(UserContext);
