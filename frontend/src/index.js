import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// // <ChakraProvider>
	// <React.StrictMode>
	// 	<BrowserRouter>
	// 		{/* <Provider store={store}> */}
	// 			<App />
	// 		{/* </Provider> */}
	// 	</BrowserRouter>
	// </React.StrictMode>
	// // </ChakraProvider>

	// <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
//   </React.StrictMode>
);
// reportWebVitals();