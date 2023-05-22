import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
