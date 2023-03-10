import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./app/App.routes";
import { homeRoutes } from "./features/home/Home.routes";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
  document.querySelector("#root") ?? new Element()
);

const router = createBrowserRouter([appRoutes([homeRoutes()])]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
