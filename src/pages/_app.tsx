import { useState } from 'react';

import '../styles/global.scss';
import styles from '../styles/app.module.scss';

import { Header } from '../components/Header';
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [episodeList, setEpisodeList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setCurrentEpisodeIndex(0);
    setEpisodeList([episode]);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider
      value={{
        currentEpisodeIndex,
        episodeList,
        isPlaying,
        play,
        setPlayingState,
        togglePlay
      }}
    >
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
    </PlayerContext.Provider>
  );
}

export default MyApp;
