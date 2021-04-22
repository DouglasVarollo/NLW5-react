import { createContext } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  currentEpisodeIndex: number;
  episodeList: Array<Episode>;
  play: (episode: Episode) => void;
};

export const PlayerContext = createContext({} as PlayerContextData);
