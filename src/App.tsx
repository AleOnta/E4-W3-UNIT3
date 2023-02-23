import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import ArticleFocusComponent from "./components/ArticleFocusComponent";
import HomeComponent from "./components/HomeComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/article/:id" element={<ArticleFocusComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
