import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SkipLink from "./components/layout/SkipLink";
import { useDirection } from "./hooks/useDirection";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";

function App() {
  const { isDark, toggleTheme } = useTheme();
  useDirection();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <SkipLink />
      <Header darkMode={isDark} toggleDarkMode={toggleTheme} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
