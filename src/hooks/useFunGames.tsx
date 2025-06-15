
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
      try {
        const response = await fetch('https://abhi-api.vercel.app/api/games');
        if (!response.ok) {
          throw new Error('Failed to fetch fun games');
        }
        const data = await response.json();
        
        // Transform the API response to match our interface
        if (Array.isArray(data)) {
          return data.map((game: any, index: number) => ({
            id: game.id || `fun-game-${index}`,
            name: game.name || game.title || 'Unknown Game',
            description: game.description || 'A fun game to play',
            category: game.category || 'General',
            url: game.url || game.link || '#',
            image: game.image || game.thumbnail || '/placeholder.svg'
          }));
        }
        
        // If the response structure is different, return empty array
        return [];
      } catch (error) {
        console.error('Error fetching fun games:', error);
        throw error;
      }
    },
  });
};

export { useFunGames };
