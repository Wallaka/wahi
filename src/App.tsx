import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./views/Home";
import Create from "./views/Create";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
