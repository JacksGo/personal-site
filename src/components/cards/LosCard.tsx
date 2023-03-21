/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as LosLogo } from '../../assets/los.svg';
import useViewTransition from '../../hooks/useViewTransition';
import styles from '../Card.module.scss';

const LosCard = () => {
  const viewTransition = useViewTransition();

  return (
    <button
      className={`${styles.card} ${styles.los}`}
      onClick={() => viewTransition("/los")}
      aria-label="Los-token"
    >
      <div className={styles.outline} aria-hidden="true">
        <LosLogo />
      </div>
      <div className={styles.fill} aria-hidden="true">
        <LosLogo />
      </div>
    </button>
  );
};

export default LosCard;