import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/ui/splash.css";

export const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <img
        src="/chatgpt-image-apr-26--2025--11-56-07-pm-1.png"
        alt="App Logo"
        className="w-40 h-40 object-contain animate-fade-in"
      />
    </div>
  );
};
