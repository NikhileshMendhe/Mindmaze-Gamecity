
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GameLobby from "./pages/GameLobby";
import PuzzleGame from "./pages/PuzzleGame";
import Leaderboard from "./pages/Leaderboard";
import YouTubers from "./pages/YouTubers";
import KingOfGames from "./pages/KingOfGames";
import GodOfGames from "./pages/GodOfGames";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lobby" element={<GameLobby />} />
            <Route path="/game/:gameId" element={<PuzzleGame />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/youtubers" element={<YouTubers />} />
            <Route path="/king-of-games" element={<KingOfGames />} />
            <Route path="/god-of-games" element={<GodOfGames />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
