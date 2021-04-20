import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header() {
  const current_date = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return (
    <header className={styles.container}>
      <img alt="Podcastr" src="/logo.svg" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{current_date}</span>
    </header>
  );
}
