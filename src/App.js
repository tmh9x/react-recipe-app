import "./App.css";

import { Route, Routes } from "react-router-dom";

import Details from "./views/Details/Details";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./views/Main/Main";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <Main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/:id" exact element={<Details />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
