import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeSlider = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/10 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="relative w-48 sm:w-64 h-12 bg-gradient-to-r from-slate-800/50 to-slate-800/50 rounded-full p-1 border border-white/20">
          {/* Slider Track */}
          <div className="absolute inset-1 rounded-full overflow-hidden">
            <div 
              className={`absolute top-0 bottom-0 left-0 right-1/2 transition-all duration-500 ${
                theme === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-slate-700/50'
              }`}
            />
            <div 
              className={`absolute top-0 bottom-0 left-1/2 right-0 transition-all duration-500 ${
                theme === 'red' ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-slate-700/50'
              }`}
            />
          </div>

          {/* Icons */}
          <div className="absolute inset-1 flex items-center justify-between px-3 pointer-events-none">
            <Sun className={`w-5 h-5 transition-all duration-500 ${theme === 'blue' ? 'text-white' : 'text-white/40'}`} />
            <Moon className={`w-5 h-5 transition-all duration-500 ${theme === 'red' ? 'text-white' : 'text-white/40'}`} />
          </div>

          {/* Slider Button */}
          <button
            onClick={() => setTheme(theme === 'blue' ? 'red' : 'blue')}
            className={`absolute top-1 w-[calc(50%-4px)] h-10 rounded-full transition-all duration-500 ${
              theme === 'blue' 
                ? 'left-1 bg-gradient-to-r from-blue-600 to-blue-700 shadow-[0_0_20px_rgba(59,130,246,0.6)]' 
                : 'left-[calc(50%+2px)] bg-gradient-to-r from-red-600 to-red-700 shadow-[0_0_20px_rgba(239,68,68,0.6)]'
            } border-2 border-white/30 hover:scale-105 active:scale-95 z-10`}
          >
            <div className="flex items-center justify-center h-full">
              {theme === 'blue' ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-white" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSlider;
