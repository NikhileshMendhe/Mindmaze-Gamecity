
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

// Mock data to replace the failing API call
const mockGames: Game[] = [
  {
    id: 1,
    title: "Fortnite",
    thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg",
    short_description: "A free-to-play Battle Royale game and so much more. Hang out peacefully with friends while watching a concert or movie.",
    game_url: "https://www.epicgames.com/fortnite/",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Epic Games",
    developer: "Epic Games",
    release_date: "2017-09-26",
    freetogame_profile_url: "https://www.freetogame.com/fortnite"
  },
  {
    id: 2,
    title: "League of Legends",
    thumbnail: "https://www.freetogame.com/g/2/thumbnail.jpg",
    short_description: "A free-to-play multiplayer online battle arena (MOBA) game where two teams of champions compete to destroy the enemy's Nexus.",
    game_url: "https://play.na.leagueoflegends.com/",
    genre: "MOBA",
    platform: "PC (Windows)",
    publisher: "Riot Games",
    developer: "Riot Games",
    release_date: "2009-10-27",
    freetogame_profile_url: "https://www.freetogame.com/league-of-legends"
  },
  {
    id: 3,
    title: "Counter-Strike 2",
    thumbnail: "https://www.freetogame.com/g/3/thumbnail.jpg",
    short_description: "The next chapter of the legendary Counter-Strike franchise. Built on Source 2, Counter-Strike 2 is a complete reboot of the classic game.",
    game_url: "https://store.steampowered.com/app/730/CounterStrike_2/",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Valve",
    developer: "Valve",
    release_date: "2023-09-27",
    freetogame_profile_url: "https://www.freetogame.com/counter-strike-2"
  },
  {
    id: 4,
    title: "Apex Legends",
    thumbnail: "https://www.freetogame.com/g/4/thumbnail.jpg",
    short_description: "A free-to-play battle royale game where legendary competitors fight for glory, fame, and fortune on the fringes of the Frontier.",
    game_url: "https://www.ea.com/games/apex-legends",
    genre: "Battle Royale",
    platform: "PC (Windows)",
    publisher: "Electronic Arts",
    developer: "Respawn Entertainment",
    release_date: "2019-02-04",
    freetogame_profile_url: "https://www.freetogame.com/apex-legends"
  },
  {
    id: 5,
    title: "Valorant",
    thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg",
    short_description: "A free-to-play tactical shooter featuring a diverse cast of agents with unique abilities in intense 5v5 matches.",
    game_url: "https://playvalorant.com/",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Riot Games",
    developer: "Riot Games",
    release_date: "2020-06-02",
    freetogame_profile_url: "https://www.freetogame.com/valorant"
  },
  {
    id: 6,
    title: "Dota 2",
    thumbnail: "https://www.freetogame.com/g/6/thumbnail.jpg",
    short_description: "The most played game on Steam. Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes.",
    game_url: "https://store.steampowered.com/app/570/Dota_2/",
    genre: "MOBA",
    platform: "PC (Windows)",
    publisher: "Valve",
    developer: "Valve",
    release_date: "2013-07-09",
    freetogame_profile_url: "https://www.freetogame.com/dota-2"
  },
  {
    id: 7,
    title: "Genshin Impact",
    thumbnail: "https://www.freetogame.com/g/7/thumbnail.jpg",
    short_description: "Step into Teyvat, a vast world teeming with life and flowing with elemental energy in this open-world action RPG.",
    game_url: "https://genshin.hoyoverse.com/",
    genre: "MMORPG",
    platform: "PC (Windows)",
    publisher: "miHoYo",
    developer: "miHoYo",
    release_date: "2020-09-28",
    freetogame_profile_url: "https://www.freetogame.com/genshin-impact"
  },
  {
    id: 8,
    title: "Rocket League",
    thumbnail: "https://www.freetogame.com/g/8/thumbnail.jpg",
    short_description: "A high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls.",
    game_url: "https://www.rocketleague.com/",
    genre: "Sports",
    platform: "PC (Windows)",
    publisher: "Psyonix",
    developer: "Psyonix",
    release_date: "2020-09-23",
    freetogame_profile_url: "https://www.freetogame.com/rocket-league"
  },
  {
    id: 9,
    title: "Fall Guys",
    thumbnail: "https://www.freetogame.com/g/9/thumbnail.jpg",
    short_description: "A massively multiplayer party game with up to 60 players online in a free-for-all struggle through round after round.",
    game_url: "https://www.fallguys.com/",
    genre: "Battle Royale",
    platform: "PC (Windows)",
    publisher: "Epic Games",
    developer: "Mediatonic",
    release_date: "2022-06-21",
    freetogame_profile_url: "https://www.freetogame.com/fall-guys"
  },
  {
    id: 10,
    title: "World of Tanks",
    thumbnail: "https://www.freetogame.com/g/10/thumbnail.jpg",
    short_description: "An online multiplayer tank battle game featuring armored combat with hundreds of tanks from various eras.",
    game_url: "https://worldoftanks.com/",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Wargaming",
    developer: "Wargaming",
    release_date: "2010-08-12",
    freetogame_profile_url: "https://www.freetogame.com/world-of-tanks"
  },
  {
    id: 11,
    title: "Path of Exile",
    thumbnail: "https://www.freetogame.com/g/11/thumbnail.jpg",
    short_description: "A dark fantasy online action RPG set in the gritty world of Wraeclast with deep character customization.",
    game_url: "https://www.pathofexile.com/",
    genre: "ARPG",
    platform: "PC (Windows)",
    publisher: "Grinding Gear Games",
    developer: "Grinding Gear Games",
    release_date: "2013-10-23",
    freetogame_profile_url: "https://www.freetogame.com/path-of-exile"
  },
  {
    id: 12,
    title: "Warframe",
    thumbnail: "https://www.freetogame.com/g/12/thumbnail.jpg",
    short_description: "A free-to-play online action game featuring fast-paced combat with a unique movement system and cooperative gameplay.",
    game_url: "https://www.warframe.com/",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Digital Extremes",
    developer: "Digital Extremes",
    release_date: "2013-03-25",
    freetogame_profile_url: "https://www.freetogame.com/warframe"
  }
];

const fetchFreeGames = async (): Promise<Game[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockGames;
};

export const useFreeGames = () => {
  return useQuery({
    queryKey: ['free-games'],
    queryFn: fetchFreeGames,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 3,
  });
};
