/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as MarkusLogo } from '../../assets/markus.svg';
import useViewTransition from '../../hooks/useViewTransition';
import styles from '../Card.module.scss';

const MarkusCard = () => {
  const viewTransition = useViewTransition();

  return (
    <button
      className={`${styles.card} ${styles.markus}`}
      onClick={() => viewTransition("/markus")}
      aria-label="Markus"
    >
      <div className={styles.outline} aria-hidden="true">
        <MarkusLogo />
      </div>
      <div className={styles.color} aria-hidden="true">
        <MarkusLogo />
      </div>
    </button>
  );
};

export default MarkusCard;