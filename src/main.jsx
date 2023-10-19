import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login.jsx";
import store from "./redux/app/store.js";
import { Provider } from "react-redux";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="home" element={<>
      <RequireAuth>
        <Header/>
        <Home />
      </RequireAuth>
      </>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
