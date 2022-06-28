import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import MainRoute from "./MainRoute";
import store from "./redux/Store";
import "antd/dist/antd.css";
import { ContextProvider } from "./context/auth/Context";

export default function App() {
  function MainApp() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <ContextProvider>
          <MainRoute />
        </ContextProvider>
      </Router>
    );
  }

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
