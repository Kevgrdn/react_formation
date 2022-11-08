import "./App.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {lazy, Suspense, useState} from "react";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import Layout from "./hoc/Layout";
import {getHeroById} from "./api/heroes";
import Search from "./pages/Search";
const queryClient = new QueryClient();

const Heroes = lazy(() => import("./pages/Heroes"));
const Battle = lazy(() => import("./pages/Battle"));
const HeroDetails = lazy(() => import("./pages/HeroDetails"));
const Counter = lazy(() => import("./components/Counter/Counter"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="heroes" element={<Heroes />} />
      <Route
        path="heroes/:id"
        element={<HeroDetails />}
        loader={async ({params}) => {
          const id = params.id || "";
          const hero = await getHeroById(id);
          return hero;
        }}
        errorElement={<p> Oops, we have a problem!</p>}
      />
      <Route path="battle" element={<Battle />} />
      <Route path="counter" element={<Counter />}></Route>
      <Route path="search" element={<Search />}></Route>
    </Route>
  )
);

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Spinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
