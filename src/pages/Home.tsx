import { Helmet } from 'react-helmet';

import MarkusCard from '../components/cards/MarkusCard';
import LosCard from '../components/cards/LosCard';
import QuestCard from '../components/cards/QuestCard';
import HealCard from '../components/cards/HealCard';
import EbayCard from '../components/cards/EbayCard';

import styles from './Home.module.scss';

const App = () => {
  return <>
    <Helmet>
      <title>Jackson Golletz</title>
    </Helmet>
    <div className={styles.container}>
      <QuestCard />
      <LosCard />
      <MarkusCard />
      <HealCard />
      <EbayCard />
    </div>
  </>;
}

export default App
