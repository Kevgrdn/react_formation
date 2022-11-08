import "./App.css";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
const queryClient = new QueryClient();

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
