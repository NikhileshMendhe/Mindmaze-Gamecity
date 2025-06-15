
import { useQuery } from "@tanstack/react-query";

interface PaidGame {
  id: string;
  title: string;
  description: string;
  price: string;
  developer: string;
  platform: string;
  genre: string;
  url: string;
  image: string;
}

const usePaidGames = () => {
  return useQuery({
    queryKey: ['paid-games'],
    queryFn: async (): Promise<PaidGame[]> => {
      console.log('Loading paid games data...');
      
      // Return curated paid games with their official store links
      return [
        {
          id: 'cyberpunk-2077',
          title: 'Cyberpunk 2077',
          description: 'An open-world action-adventure story set in Night City',
          price: '$59.99',
          developer: 'CD Projekt Red',
          platform: 'PC, PlayStation, Xbox',
          genre: 'Action RPG',
          url: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
          image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop'
        },
        {
          id: 'elden-ring',
          title: 'Elden Ring',
          description: 'A fantasy action-RPG adventure set in the Lands Between',
          price: '$59.99',
          developer: 'FromSoftware',
          platform: 'PC, PlayStation, Xbox',
          genre: 'Action RPG',
          url: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
          image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop'
        },
        {
          id: 'baldurs-gate-3',
          title: "Baldur's Gate 3",
          description: 'Gather your party and return to the Forgotten Realms',
          price: '$59.99',
          developer: 'Larian Studios',
          platform: 'PC, PlayStation',
          genre: 'RPG',
          url: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
          image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=300&fit=crop'
        },
        {
          id: 'hogwarts-legacy',
          title: 'Hogwarts Legacy',
          description: 'Experience life as a student at Hogwarts School of Witchcraft and Wizardry',
          price: '$69.99',
          developer: 'Avalanche Software',
          platform: 'PC, PlayStation, Xbox, Nintendo Switch',
          genre: 'Action RPG',
          url: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          id: 'microsoft-flight-simulator',
          title: 'Microsoft Flight Simulator',
          description: 'Take to the skies and explore the world in stunning detail',
          price: '$59.99',
          developer: 'Asobo Studio',
          platform: 'PC, Xbox',
          genre: 'Simulation',
          url: 'https://store.steampowered.com/app/1250410/Microsoft_Flight_Simulator/',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop'
        },
        {
          id: 'call-of-duty-modern-warfare',
          title: 'Call of Duty: Modern Warfare III',
          description: 'The latest installment in the legendary Call of Duty franchise',
          price: '$69.99',
          developer: 'Sledgehammer Games',
          platform: 'PC, PlayStation, Xbox',
          genre: 'First-Person Shooter',
          url: 'https://store.steampowered.com/app/2519060/Call_of_Duty_Modern_Warfare_III/',
          image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop'
        },
        {
          id: 'starfield',
          title: 'Starfield',
          description: 'Bethesda Game Studios epic space exploration RPG',
          price: '$69.99',
          developer: 'Bethesda Game Studios',
          platform: 'PC, Xbox',
          genre: 'Action RPG',
          url: 'https://store.steampowered.com/app/1716740/Starfield/',
          image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop'
        },
        {
          id: 'cities-skylines-2',
          title: 'Cities: Skylines II',
          description: 'Build and manage your dream city in this city-building simulation',
          price: '$49.99',
          developer: 'Colossal Order',
          platform: 'PC, PlayStation, Xbox',
          genre: 'City Builder',
          url: 'https://store.steampowered.com/app/949230/Cities_Skylines_II/',
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop'
        }
      ];
    },
    retry: 0,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { usePaidGames };
