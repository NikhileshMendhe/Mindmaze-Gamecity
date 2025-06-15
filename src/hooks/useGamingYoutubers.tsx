
import { useQuery } from "@tanstack/react-query";

interface GamingYoutuber {
  id: string;
  name: string;
  description: string;
  subscribers: string;
  specialty: string;
  country: string;
  url: string;
  image: string;
}

const useGamingYoutubers = () => {
  return useQuery({
    queryKey: ['gaming-youtubers'],
    queryFn: async (): Promise<GamingYoutuber[]> => {
      console.log('Loading gaming YouTubers data...');
      
      return [
        {
          id: 'total-gaming',
          name: 'Total Gaming',
          description: 'One of India\'s biggest gaming channels featuring GTA 5, PUBG, and Free Fire content',
          subscribers: '35M+',
          specialty: 'GTA 5, Free Fire, PUBG',
          country: 'India',
          url: 'https://www.youtube.com/@TotalGaming093',
          image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop'
        },
        {
          id: 'beast-boy-shub',
          name: 'BeastBoyShub',
          description: 'Popular Indian gaming YouTuber known for horror games, Minecraft, and entertaining commentary',
          subscribers: '6M+',
          specialty: 'Horror Games, Minecraft',
          country: 'India',
          url: 'https://www.youtube.com/@BeastBoyShub',
          image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop'
        },
        {
          id: 'techno-gamerz',
          name: 'Techno Gamerz',
          description: 'Leading Indian gaming channel featuring GTA 5 gameplay with creative storylines',
          subscribers: '32M+',
          specialty: 'GTA 5, Action Games',
          country: 'India',
          url: 'https://www.youtube.com/@TechnoGamerzOfficial',
          image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=300&fit=crop'
        },
        {
          id: 'markiplier',
          name: 'Markiplier',
          description: 'Famous for horror game playthroughs and charity work, known for his energetic personality',
          subscribers: '35M+',
          specialty: 'Horror Games, Indie Games',
          country: 'USA',
          url: 'https://www.youtube.com/@markiplier',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
        },
        {
          id: 'jacksepticeye',
          name: 'Jacksepticeye',
          description: 'Irish YouTuber known for his loud, energetic commentary and variety gaming content',
          subscribers: '30M+',
          specialty: 'Variety Gaming, Indie Games',
          country: 'Ireland',
          url: 'https://www.youtube.com/@jacksepticeye',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop'
        },
        {
          id: 'dantdm',
          name: 'DanTDM',
          description: 'British gamer famous for Minecraft content and family-friendly gaming videos',
          subscribers: '28M+',
          specialty: 'Minecraft, Family Gaming',
          country: 'UK',
          url: 'https://www.youtube.com/@DanTDM',
          image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop'
        },
        {
          id: 'pewdiepie',
          name: 'PewDiePie',
          description: 'The most subscribed individual creator, known for gaming, memes, and commentary',
          subscribers: '111M+',
          specialty: 'Variety Content, Gaming',
          country: 'Sweden',
          url: 'https://www.youtube.com/@PewDiePie',
          image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=300&fit=crop'
        },
        {
          id: 'vanoss-gaming',
          name: 'VanossGaming',
          description: 'Canadian YouTuber known for funny gaming moments with friends and montages',
          subscribers: '25M+',
          specialty: 'Multiplayer Games, Montages',
          country: 'Canada',
          url: 'https://www.youtube.com/@VanossGaming',
          image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop'
        },
        {
          id: 'fernanfloo',
          name: 'Fernanfloo',
          description: 'Popular Spanish-speaking gaming YouTuber known for entertaining and funny content',
          subscribers: '45M+',
          specialty: 'Variety Gaming, Comedy',
          country: 'El Salvador',
          url: 'https://www.youtube.com/results?search_query=+Fernanfloo',
          image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop'
        },
        {
          id: 'dynamo-gaming',
          name: 'Dynamo Gaming',
          description: 'Indian gaming content creator famous for PUBG Mobile and other mobile gaming content',
          subscribers: '12M+',
          specialty: 'PUBG Mobile, Mobile Gaming',
          country: 'India',
          url: 'https://www.youtube.com/@DynamoGaming',
          image: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=300&fit=crop'
        }
      ];
    },
    retry: 0,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { useGamingYoutubers };
