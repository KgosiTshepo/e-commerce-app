import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import { persistor, store } from "./redux/store/store";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	/* The Provider makes Redux store available to all components rendered inside <Provider>
	 *  The idea is that the store needs to be placed where child components can have access to it.
	 *  This then makes it available to the entire component tree through the connect() calls
	 */

	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				{/*PersistGate delays the rendering until the persisted state is retrieved and saved to Redux
				 * Takes a loading prop which can be null or any react instance to show during data retrieval */}
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
