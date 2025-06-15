
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

// Mock data for fallback when API fails due to CORS
const mockHardGames: HardGame[] = [
  {
    id: 1,
    title: "Cyberpunk 2077 Ultimate Edition",
    description: "Experience Night City like never before with the complete Cyberpunk 2077 experience including all DLCs and expansions.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    platforms: "PC, PlayStation, Xbox",
    end_date: "2024-12-31",
    users: 15420,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 2,
    title: "Elden Ring Deluxe Edition",
    description: "Embark on an epic journey through the Lands Between in this critically acclaimed action RPG from FromSoftware.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=200&fit=crop",
    platforms: "PC, PlayStation, Xbox",
    end_date: "2024-11-15",
    users: 23150,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 3,
    title: "Steam Gift Card $50",
    description: "Get a $50 Steam gift card to purchase any games you want from the Steam store.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=200&fit=crop",
    platforms: "PC",
    end_date: "N/A",
    users: 8930,
    type: "DLC",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 4,
    title: "God of War Ragnarök",
    description: "Join Kratos and Atreus on their mythic journey for answers before Ragnarök arrives.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd745d?w=400&h=200&fit=crop",
    platforms: "PlayStation, PC",
    end_date: "2024-10-30",
    users: 19650,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 5,
    title: "Baldur's Gate 3 Digital Deluxe",
    description: "Experience the ultimate RPG adventure with enhanced content and exclusive digital items.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=200&fit=crop",
    platforms: "PC, PlayStation, Xbox",
    end_date: "2024-12-01",
    users: 31220,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  },
  {
    id: 6,
    title: "Hogwarts Legacy",
    description: "Live the unwritten story of your witch or wizard in the magical world of Hogwarts.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    platforms: "PC, PlayStation, Xbox, Nintendo Switch",
    end_date: "2024-11-20",
    users: 27840,
    type: "Game",
    status: "Active",
    gamerpower_url: "#",
    open_giveaway_url: "#"
  }
];

const useHardGames = () => {
  return useQuery({
    queryKey: ['hard-games'],
    queryFn: async (): Promise<HardGame[]> => {
      console.log('Fetching hard games from GamePower API...');
      
      try {
        const response = await fetch('https://gamerpower.com/api/giveaways');
        console.log('GamePower API response status:', response.status);
        
        if (!response.ok) {
          throw new Error('Failed to fetch hard games from API');
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
        return mockHardGames;
      }
    },
    retry: 1,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { useHardGames };
