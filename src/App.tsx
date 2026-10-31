import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useDirection } from "./hooks/useDirection";
import { useTheme } from "./hooks/useTheme";
import Home from "./pages/Home";

function App() {
  const { isDark, toggleTheme } = useTheme();
  useDirection();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header darkMode={isDark} toggleDarkMode={toggleTheme} />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
