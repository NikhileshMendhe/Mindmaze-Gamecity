
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
          image: '/lovable-uploads/4a8f6515-d45d-46d9-9db4-f7be2fb9b2ad.png'
        },
        {
          id: 'beast-boy-shub',
          name: 'BeastBoyShub',
          description: 'Popular Indian gaming YouTuber known for horror games, Minecraft, and entertaining commentary',
          subscribers: '6M+',
          specialty: 'Horror Games, Minecraft',
          country: 'India',
          url: 'https://www.youtube.com/@BeastBoyShub',
          image: '/lovable-uploads/928c2528-594d-45bb-8177-0e4b077b7ec0.png'
        },
        {
          id: 'techno-gamerz',
          name: 'Techno Gamerz',
          description: 'Leading Indian gaming channel featuring GTA 5 gameplay with creative storylines',
          subscribers: '32M+',
          specialty: 'GTA 5, Action Games',
          country: 'India',
          url: 'https://www.youtube.com/@TechnoGamerzOfficial',
          image: '/lovable-uploads/60f18683-11fb-4558-8550-59dfd0830972.png'
        },
        {
          id: 'markiplier',
          name: 'Markiplier',
          description: 'Famous for horror game playthroughs and charity work, known for his energetic personality',
          subscribers: '35M+',
          specialty: 'Horror Games, Indie Games',
          country: 'USA',
          url: 'https://www.youtube.com/@markiplier',
          image: '/lovable-uploads/6d8f3989-f691-484d-96d5-2643b1b30c04.png'
        },
        {
          id: 'jacksepticeye',
          name: 'Jacksepticeye',
          description: 'Irish YouTuber known for his loud, energetic commentary and variety gaming content',
          subscribers: '30M+',
          specialty: 'Variety Gaming, Indie Games',
          country: 'Ireland',
          url: 'https://www.youtube.com/@jacksepticeye',
          image: '/lovable-uploads/273adad0-8e3b-431b-9d9a-b8c732c266f1.png'
        },
        {
          id: 'dantdm',
          name: 'DanTDM',
          description: 'British gamer famous for Minecraft content and family-friendly gaming videos',
          subscribers: '28M+',
          specialty: 'Minecraft, Family Gaming',
          country: 'UK',
          url: 'https://www.youtube.com/@DanTDM',
          image: '/lovable-uploads/6bd28923-e559-43cd-a7e9-b63b891031b4.png'
        },
        {
          id: 'pewdiepie',
          name: 'PewDiePie',
          description: 'The most subscribed individual creator, known for gaming, memes, and commentary',
          subscribers: '111M+',
          specialty: 'Variety Content, Gaming',
          country: 'Sweden',
          url: 'https://www.youtube.com/@PewDiePie',
          image: '/lovable-uploads/090db42b-2264-4e73-8da0-3f4775d28a29.png'
        },
        {
          id: 'vanoss-gaming',
          name: 'VanossGaming',
          description: 'Canadian YouTuber known for funny gaming moments with friends and montages',
          subscribers: '25M+',
          specialty: 'Multiplayer Games, Montages',
          country: 'Canada',
          url: 'https://www.youtube.com/@VanossGaming',
          image: '/lovable-uploads/2fa45e57-35b4-4733-a95b-bb7e16fa8e43.png'
        },
        {
          id: 'fernanfloo',
          name: 'Fernanfloo',
          description: 'Popular Spanish-speaking gaming YouTuber known for entertaining and funny content',
          subscribers: '45M+',
          specialty: 'Variety Gaming, Comedy',
          country: 'El Salvador',
          url: 'https://www.youtube.com/results?search_query=+Fernanfloo',
          image: '/lovable-uploads/747ca797-d26d-4469-a17b-91c3194644d0.png'
        },
        {
          id: 'dynamo-gaming',
          name: 'Dynamo Gaming',
          description: 'Indian gaming content creator famous for PUBG Mobile and other mobile gaming content',
          subscribers: '12M+',
          specialty: 'PUBG Mobile, Mobile Gaming',
          country: 'India',
          url: 'https://www.youtube.com/@DynamoGaming',
          image: '/lovable-uploads/984b2011-c046-401a-b2d1-0f2b2cbae554.png'
        }
      ];
    },
    retry: 0,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export { useGamingYoutubers };
