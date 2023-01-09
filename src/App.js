import { RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import router from "./Routes/Routes";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
