import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initialState, reducer } from "./context/reducer";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.render(
	<React.StrictMode>
		<UserContextProvider initialState={initialState} reducer={reducer}>
			<App />
		</UserContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
