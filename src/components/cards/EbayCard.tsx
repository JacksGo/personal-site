/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as EbayLogo } from '../../assets/ebay.svg';
import useViewTransition from '../../hooks/useViewTransition';
import styles from '../Card.module.scss';

const EbayCard = () => {
  const viewTransition = useViewTransition();
  
  return (
    <button
      className={`${styles.card} ${styles.ebay}`}
      onClick={() => viewTransition('/ebay')}
      aria-label="eBay"
    >
      <div className={styles.outline} aria-hidden="true">
        <EbayLogo />
      </div>
      <div className={styles.fill} aria-hidden="true">
        <EbayLogo />
      </div>
    </button>
  );
};

export default EbayCard;