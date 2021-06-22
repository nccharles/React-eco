import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { configureStore } from "./store";
const store = configureStore();
const persiststor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persiststor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
