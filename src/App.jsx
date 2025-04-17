import { Suspense, lazy, useEffect, useState } from 'react';
import './App.css';
import { FaArrowAltCircleUp } from 'react-icons/fa';

// Lazy loaded components
const Navbar = lazy(() => import('./Components/Navbar/Navbar'));
const Homepage = lazy(() => import('./Pages/Homepage'));
const Footer = lazy(() => import('./Components/Footer/Footer'));

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    if (document.readyState === 'complete') {
      setPageLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  const Loader = (
    <div className="w-full h-screen flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );

  if (!pageLoaded) return Loader;

  return (
    <Suspense fallback={Loader}>
      <Navbar />
      <Homepage />
      <Footer />
      {typeof window !== "undefined" && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowAltCircleUp/>
        </button>
      )}
    </Suspense>
  );
}

export default App;
