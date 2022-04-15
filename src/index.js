import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";

import store from "./store/store";
// const rootElement = document.getElementById("root");

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// root.render(
//   <StrictMode>
//
//   </StrictMode>
// );
