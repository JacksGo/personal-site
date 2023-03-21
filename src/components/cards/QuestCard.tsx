/// <reference types="vite-plugin-svgr/client" />

import { useNavigate } from 'react-router-dom';
import { ReactComponent as QuestLogo } from '../../assets/quest.svg';
import useViewTransition from '../../hooks/useViewTransition';
import styles from '../Card.module.scss';

declare global {
  interface Document {
    startViewTransition: (callback: () => void) => void;
  }
}

const QuestCard = () => {
  const viewTransition = useViewTransition();

  return (
    <button
      className={`${styles.card} ${styles.quest}`}
      onClick={(e) => { e.preventDefault(); viewTransition('/quest'); }}
      aria-label="Quest.fan"
    >
      <div className={styles.outline} aria-hidden="true">
        <QuestLogo />
      </div>
      <div className={styles.fill} aria-hidden="true">
        <QuestLogo />
      </div>
    </button>
  );
};

export default QuestCard;