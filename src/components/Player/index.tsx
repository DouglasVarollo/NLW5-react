import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import styles from './styles.module.scss';
import { PlayerContext } from '../../contexts/PlayerContext';

export function Player() {
  const {
    currentEpisodeIndex,
    episodeList,
    isPlaying,
    setPlayingState,
    togglePlay
  } = useContext(PlayerContext);
  const audioRef = useRef<HTMLAudioElement>(null);

  const episode = episodeList[currentEpisodeIndex];

  useEffect(
    function () {
      if (!audioRef.current) {
        return;
      }

      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    },
    [isPlaying]
  );

  return (
    <div className={styles.container}>
      <header>
        <img alt="Tocando agora" src="/playing.svg" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            alt={episode.title}
            src={episode.thumbnail}
            width={592}
            height={592}
            objectFit="cover"
          />

          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode ? styles.empty : ''}>
        <div className={styles.progress}>
          <span>00:00</span>

          <div className={styles.slider}>
            {episode ? (
              <Slider
                handleStyle={{ backgroundColor: '#04d361', borderWidth: 4 }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                trackStyle={{ backgroundColor: '#04d361' }}
              />
            ) : (
              <div className={styles.emptySlider}></div>
            )}
          </div>

          <span>00:00</span>
        </div>

        {episode && (
          <audio
            autoPlay
            ref={audioRef}
            onPause={() => setPlayingState(false)}
            onPlay={() => setPlayingState(true)}
            src={episode.url}
          />
        )}

        <div className={styles.buttons}>
          <button disabled={!episode}>
            <img alt="Embaralhar" src="/shuffle.svg" />
          </button>

          <button disabled={!episode}>
            <img alt="Tocar anterior" src="/play-previous.svg" />
          </button>

          <button
            className={styles.playButton}
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <img alt="Tocar" src="/pause.svg" />
            ) : (
              <img alt="Tocar" src="/play.svg" />
            )}
          </button>

          <button disabled={!episode}>
            <img alt="Tocar próxima" src="/play-next.svg" />
          </button>

          <button disabled={!episode}>
            <img alt="Repetir" src="/repeat.svg" />
          </button>
        </div>
      </footer>
    </div>
  );
}
