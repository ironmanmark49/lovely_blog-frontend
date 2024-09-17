import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { BlogPage } from "./pages/BlogPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
