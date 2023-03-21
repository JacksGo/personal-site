/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as PaletLogo } from '../../assets/palet.svg';
import styles from '../Card.module.scss';

const PaletCard = () => (
  <button
    disabled
    className={`${styles.card} ${styles.palet} ${styles.disabled}`}
    aria-label="Palet (coming soon)"
  >
    <div className={styles.outline} aria-hidden="true">
      <PaletLogo />
    </div>
    <div className={styles.fill} aria-hidden="true">
      <PaletLogo />
    </div>
  </button>
);

export default PaletCard;