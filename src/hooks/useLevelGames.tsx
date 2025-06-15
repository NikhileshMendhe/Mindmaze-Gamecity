
import { useQuery } from "@tanstack/react-query";

interface LevelGame {
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

// Mock data for fallback when API fails due to CORS
const mockLevelGames: LevelGame[] = [
  {
    id: 1,
    title: "Level Up Championship",
    description: "Compete in the ultimate gaming championship with exclusive rewards and recognition.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    platforms: "PC, PlayStation, Xbox",
    end_date: "2024-12-31",
    users: 25420,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 2,
    title: "Pro Gamer Series",
    description: "Join the professional gaming series with advanced challenges and premium rewards.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=200&fit=crop",
    platforms: "PC, PlayStation, Xbox",
    end_date: "2024-11-15",
    users: 18150,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 3,
    title: "Elite Gaming Collection",
    description: "Access exclusive elite gaming content with premium features and advanced gameplay.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=200&fit=crop",
    platforms: "PC",
    end_date: "N/A",
    users: 12930,
    type: "DLC",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 4,
    title: "Master Level Challenges",
    description: "Take on master-level gaming challenges designed for experienced players.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd745d?w=400&h=200&fit=crop",
    platforms: "PlayStation, PC",
    end_date: "2024-10-30",
    users: 21650,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 5,
    title: "Legendary Tournament Pass",
    description: "Get access to legendary tournaments with exclusive prizes and recognition.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=200&fit=crop",
    platforms: "PC, PlayStation, Xbox",
    end_date: "2024-12-01",
    users: 35220,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 6,
    title: "Champion's League Access",
    description: "Join the champion's league with advanced features and exclusive content.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    platforms: "PC, PlayStation, Xbox, Nintendo Switch",
    end_date: "2024-11-20",
    users: 29840,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  }
];

const useLevelGames = () => {
  return useQuery({
    queryKey: ['level-games'],
    queryFn: async (): Promise<LevelGame[]> => {
      console.log('Fetching level games from GamePower API...');
      
      try {
        const response = await fetch('https://gamerpower.com/api/giveaways');
        console.log('GamePower API response status:', response.status);
        
        if (!response.ok) {
          throw new Error('Failed to fetch level games from API');
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
      } catch (error) {
        console.error('GamePower API failed, using mock data:', error);
        
        // Return mock data when API fails (usually due to CORS)
        return mockLevelGames;
      }
    },
    retry: 1,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { useLevelGames };
