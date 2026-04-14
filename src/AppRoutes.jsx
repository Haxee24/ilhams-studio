import { Route, Routes } from "react-router-dom";
import { ArtPage, Contact, Gallery, Home, Layout } from "./pages";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/images/:id" element={<ArtPage/>} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
