import {useState} from "react";
import {RouterProvider} from "react-router-dom";
import "./App.css";
import {router} from "./router/router";

function App() {
  const [visible, setVisible] = useState(true);

  return <RouterProvider router={router} />;
}

export default App;
