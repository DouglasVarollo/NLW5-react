import styles from './styles.module.scss';

export function Player() {
  return (
    <div className={styles.container}>
      <header>
        <img alt="Tocando agora" src="/playing.svg" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer>
        <div className={styles.progress}>
          <span>00:00</span>

          <div className={styles.slider}>
            <div className={styles.emptySlider}></div>
          </div>

          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button>
            <img alt="Embaralhar" src="/shuffle.svg" />
          </button>

          <button>
            <img alt="Tocar anterior" src="/play-previous.svg" />
          </button>

          <button className={styles.playButton}>
            <img alt="Tocar" src="/play.svg" />
          </button>

          <button>
            <img alt="Tocar próxima" src="/play-next.svg" />
          </button>

          <button>
            <img alt="Repetir" src="/repeat.svg" />
          </button>
        </div>
      </footer>
    </div>
  );
}
