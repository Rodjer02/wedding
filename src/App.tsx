import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import StylePage from "@/pages/Style";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style/:variant" element={<StylePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
