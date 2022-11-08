import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Layout from "../hoc/Layout";
import Battle from "../pages/Battle";
import HeroDetails from "../pages/HeroDetails";
import Heroes from "../pages/Heroes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="heroes" element={<Heroes />} />
      <Route path="heroes/:id" element={<HeroDetails />} />
      <Route path="battle" element={<Battle />} />
    </Route>
  )
);
