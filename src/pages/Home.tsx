import { Helmet } from 'react-helmet';

import MarkusCard from '../components/cards/MarkusCard';
import LosCard from '../components/cards/LosCard';
import QuestCard from '../components/cards/QuestCard';
import HealCard from '../components/cards/HealCard';
import PaletCard from '../components/cards/PaletCard';

import styles from './home.module.scss';

const App = () => {
  return <>
    <Helmet>
      <title>Portfolio - Jackson Golletz</title>
    </Helmet>
    <div className={styles.container}>
      <QuestCard />
      <LosCard />
      <MarkusCard />
      <HealCard />
      <PaletCard />
    </div>
  </>;
}

export default App
