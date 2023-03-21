/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as HealLogo } from '../../assets/heal.svg';
import useViewTransition from '../../hooks/useViewTransition';
import styles from '../Card.module.scss';

const HealCard = () => {
  const viewTransition = useViewTransition();
  
  return (
    <button
      className={`${styles.card} ${styles.heal}`}
      onClick={() => viewTransition('/heal')}
      aria-label="Heal"
    >
      <div className={styles.outline} aria-hidden="true">
        <HealLogo />
      </div>
      <div className={styles.fill} aria-hidden="true">
        <HealLogo />
      </div>
    </button>
  );
};

export default HealCard;