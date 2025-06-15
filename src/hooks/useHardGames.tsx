
import { useQuery } from "@tanstack/react-query";

interface HardGame {
  id: number;
  title: string;
  description: string;
  image: string;
  platforms: string;
  end_date: string;
  users: number;
  type: string;
  status: string;
  gamerpower_url: string;
  open_giveaway_url: string;
}

const useHardGames = () => {
  return useQuery({
    queryKey: ['hard-games'],
    queryFn: async (): Promise<HardGame[]> => {
      console.log('Fetching hard games from GamePower API...');
      
      const response = await fetch('https://gamerpower.com/api/giveaways');
      console.log('GamePower API response status:', response.status);
      
      if (!response.ok) {
        throw new Error('Failed to fetch hard games');
      }
      
      const data = await response.json();
      console.log('GamePower API data:', data);
      
      // Filter for active giveaways and limit to 12 games
      const activeGames = data.filter((game: any) => game.status === 'Active').slice(0, 12);
      
      return activeGames.map((game: any) => ({
        id: game.id,
        title: game.title,
        description: game.description,
        image: game.image,
        platforms: game.platforms,
        end_date: game.end_date,
        users: game.users,
        type: game.type,
        status: game.status,
        gamerpower_url: game.gamerpower_url,
        open_giveaway_url: game.open_giveaway_url
      }));
    },
    retry: 1,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { useHardGames };
