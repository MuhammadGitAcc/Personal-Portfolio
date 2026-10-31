import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header darkMode={isDark} toggleDarkMode={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
