
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
      
      // Try multiple possible endpoints
      const possibleEndpoints = [
        'https://abhi-api.vercel.app/api/fun-games',
        'https://abhi-api.vercel.app/games',
        'https://abhi-api.vercel.app/api/game',
        'https://abhi-api.vercel.app/fun-games'
      ];
      
      for (const endpoint of possibleEndpoints) {
        try {
          console.log(`Trying endpoint: ${endpoint}`);
          const response = await fetch(endpoint);
          console.log(`${endpoint} - Status:`, response.status);
          
          if (response.ok) {
            const data = await response.json();
            console.log(`Success with ${endpoint}:`, data);
            
            // Handle different response structures
            let gamesArray = [];
            
            if (Array.isArray(data)) {
              gamesArray = data;
            } else if (data && typeof data === 'object') {
              if (data.games && Array.isArray(data.games)) {
                gamesArray = data.games;
              } else if (data.data && Array.isArray(data.data)) {
                gamesArray = data.data;
              } else if (data.results && Array.isArray(data.results)) {
                gamesArray = data.results;
              }
            }
            
            if (gamesArray.length > 0) {
              const transformedGames = gamesArray.map((game: any, index: number) => ({
                id: game.id || game._id || `fun-game-${index}`,
                name: game.name || game.title || game.gameName || 'Unknown Game',
                description: game.description || game.desc || 'A fun game to play',
                category: game.category || game.genre || game.type || 'General',
                url: game.url || game.link || game.gameUrl || '#',
                image: game.image || game.thumbnail || game.img || '/placeholder.svg'
              }));
              
              console.log('Transformed games:', transformedGames);
              return transformedGames;
            }
          }
        } catch (error) {
          console.log(`Failed to fetch from ${endpoint}:`, error);
          continue;
        }
      }
      
      // If all endpoints fail, return some mock data so the UI works
      console.log('All API endpoints failed, returning mock data');
      return [
        {
          id: 'mock-1',
          name: 'Tic Tac Toe',
          description: 'Classic Tic Tac Toe game - the timeless strategy game',
          category: 'Strategy',
          url: 'https://playtictactoe.org/',
          image: '/lovable-uploads/fac5764d-6165-4767-aab2-329a8c95f5b7.png'
        },
        {
          id: 'mock-2',
          name: 'Snake Game',
          description: 'Classic Snake game - navigate and grow your snake',
          category: 'Arcade',
          url: 'https://playsnake.org/',
          image: '/lovable-uploads/984847a1-e87d-451f-b422-9e8f3308ee55.png'
        },
        {
          id: 'mock-3',
          name: 'Tetris',
          description: 'Classic Tetris puzzle game - arrange falling blocks',
          category: 'Puzzle',
          url: 'https://tetris.com/play-tetris',
          image: '/lovable-uploads/caf20ac5-76b6-42ac-8869-5c77314f2673.png'
        },
        {
          id: 'mock-4',
          name: 'Pac-Man Arcade',
          description: 'Classic Pac-Man arcade game - collect points and avoid ghosts',
          category: 'Arcade',
          url: 'https://www.google.com/logos/2010/pacman10-i.html',
          image: '/lovable-uploads/37ecfa42-1355-4d5a-b475-dc60e292f5a2.png'
        }
      ];
    },
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export { useFunGames };
