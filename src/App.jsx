import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Recommendation from "./pages/Recommendation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/recommendation" element={<Recommendation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
