import { BrowserRouter, Routes, Route } from "react-router";

import IndexLayout from "./layouts/IndexLayout.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
