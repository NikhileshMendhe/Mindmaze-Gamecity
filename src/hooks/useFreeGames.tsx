
import { useQuery } from '@tanstack/react-query';

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

const fetchFreeGames = async (): Promise<Game[]> => {
  // Using a CORS proxy to access the Free-to-Game API
  const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games?platform=pc', {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch games');
  }
  return response.json();
};

export const useFreeGames = () => {
  return useQuery({
    queryKey: ['free-games'],
    queryFn: fetchFreeGames,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 3,
  });
};
