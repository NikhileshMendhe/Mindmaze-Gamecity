
import { useQuery } from "@tanstack/react-query";

interface BestGame {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  difficulty: string;
  players: number;
  rating: number;
  features: string[];
}

// Mock data for fallback when API fails
const mockBestGames: BestGame[] = [
  {
    id: 1,
    name: "Blade Master",
    description: "Master of close combat with devastating sword techniques and high damage output.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    category: "Melee Fighter",
    difficulty: "Hard",
    players: 15420,
    rating: 9.2,
    features: ["High Damage", "Close Combat", "Sword Mastery", "Critical Strikes"]
  },
  {
    id: 2,
    name: "Elementor",
    description: "Powerful magic user capable of controlling the elements and casting devastating spells.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
    category: "Magic User",
    difficulty: "Medium",
    players: 23150,
    rating: 8.8,
    features: ["Elemental Magic", "Long Range", "Area Damage", "Mana Control"]
  },
  {
    id: 3,
    name: "Ranger",
    description: "Expert archer with exceptional accuracy and wilderness survival skills.",
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd745d?w=400&h=200&fit=crop",
    category: "Ranged Fighter",
    difficulty: "Medium",
    players: 18930,
    rating: 8.5,
    features: ["Archery", "Stealth", "Tracking", "Nature Magic"]
  },
  {
    id: 4,
    name: "Assist",
    description: "Support specialist providing buffs, healing, and tactical advantages to the team.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    category: "Support",
    difficulty: "Easy",
    players: 12650,
    rating: 8.9,
    features: ["Healing", "Buffs", "Team Support", "Utility Magic"]
  },
  {
    id: 5,
    name: "Acrobat",
    description: "Agile fighter with incredible speed and acrobatic combat techniques.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=200&fit=crop",
    category: "Agile Fighter",
    difficulty: "Hard",
    players: 16220,
    rating: 8.7,
    features: ["High Speed", "Acrobatics", "Dual Weapons", "Evasion"]
  },
  {
    id: 6,
    name: "Magician",
    description: "Versatile spellcaster with a wide array of magical abilities and knowledge.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=200&fit=crop",
    category: "Magic User",
    difficulty: "Medium",
    players: 21840,
    rating: 8.6,
    features: ["Versatile Magic", "Spell Research", "Enchantments", "Arcane Knowledge"]
  }
];

const useBestGames = () => {
  return useQuery({
    queryKey: ['best-games'],
    queryFn: async (): Promise<BestGame[]> => {
      console.log('Fetching best games from Flyff API...');
      
      try {
        const response = await fetch('https://api.flyff.com/class');
        console.log('Flyff API response status:', response.status);
        
        if (!response.ok) {
          throw new Error('Failed to fetch best games from API');
        }
        
        const data = await response.json();
        console.log('Flyff API data:', data);
        
        // Transform API data to our format
        if (Array.isArray(data)) {
          return data.slice(0, 12).map((item: any, index: number) => ({
            id: index + 1,
            name: item.name || item.className || `Class ${index + 1}`,
            description: item.description || item.details || 'A powerful character class with unique abilities.',
            image: item.image || `https://images.unsplash.com/photo-${1518709268805 + index}?w=400&h=200&fit=crop`,
            category: item.category || item.type || 'Fighter',
            difficulty: item.difficulty || ['Easy', 'Medium', 'Hard'][index % 3],
            players: Math.floor(Math.random() * 20000) + 10000,
            rating: Math.floor((Math.random() * 2 + 8) * 10) / 10,
            features: item.features || item.skills || ['Combat', 'Strategy', 'Adventure', 'RPG']
          }));
        }
        
        // If data is not an array, try to extract classes from object structure
        if (typeof data === 'object' && data.classes) {
          return data.classes.slice(0, 12).map((item: any, index: number) => ({
            id: index + 1,
            name: item.name || item.className || `Class ${index + 1}`,
            description: item.description || item.details || 'A powerful character class with unique abilities.',
            image: item.image || `https://images.unsplash.com/photo-${1518709268805 + index}?w=400&h=200&fit=crop`,
            category: item.category || item.type || 'Fighter',
            difficulty: item.difficulty || ['Easy', 'Medium', 'Hard'][index % 3],
            players: Math.floor(Math.random() * 20000) + 10000,
            rating: Math.floor((Math.random() * 2 + 8) * 10) / 10,
            features: item.features || item.skills || ['Combat', 'Strategy', 'Adventure', 'RPG']
          }));
        }
        
        throw new Error('Unexpected API response format');
      } catch (error) {
        console.error('Flyff API failed, using mock data:', error);
        
        // Return mock data when API fails
        return mockBestGames;
      }
    },
    retry: 1,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { useBestGames };
