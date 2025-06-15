
import { useQuery } from "@tanstack/react-query";

interface FunGame {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  image?: string;
}

const useFunGames = () => {
  return useQuery({
    queryKey: ['fun-games'],
    queryFn: async (): Promise<FunGame[]> => {
      console.log('Fetching fun games from API...');
      
      const response = await fetch('https://abhi-api.vercel.app/api/games');
      console.log('API Response status:', response.status);
      console.log('API Response ok:', response.ok);
      
      if (!response.ok) {
        console.error('API request failed with status:', response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Raw API data:', data);
      console.log('Data type:', typeof data);
      console.log('Is array:', Array.isArray(data));
      
      // Handle different response structures
      let gamesArray = [];
      
      if (Array.isArray(data)) {
        gamesArray = data;
      } else if (data && typeof data === 'object') {
        // Check if games are nested in a property
        if (data.games && Array.isArray(data.games)) {
          gamesArray = data.games;
        } else if (data.data && Array.isArray(data.data)) {
          gamesArray = data.data;
        } else if (data.results && Array.isArray(data.results)) {
          gamesArray = data.results;
        } else {
          console.log('Data structure not recognized, using empty array');
          return [];
        }
      }
      
      console.log('Games array length:', gamesArray.length);
      
      const transformedGames = gamesArray.map((game: any, index: number) => {
        console.log(`Game ${index}:`, game);
        return {
          id: game.id || game._id || `fun-game-${index}`,
          name: game.name || game.title || game.gameName || 'Unknown Game',
          description: game.description || game.desc || 'A fun game to play',
          category: game.category || game.genre || game.type || 'General',
          url: game.url || game.link || game.gameUrl || '#',
          image: game.image || game.thumbnail || game.img || '/placeholder.svg'
        };
      });
      
      console.log('Transformed games:', transformedGames);
      return transformedGames;
    },
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export { useFunGames };
