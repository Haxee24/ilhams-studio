import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<h1>About</h1>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
