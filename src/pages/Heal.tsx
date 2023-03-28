/// <reference types="vite-plugin-svgr/client" />

import styles from './Heal.module.scss';
import { ReactComponent as HealLogo } from '../assets/heal.svg';
import useViewTransition from '../hooks/useViewTransition';
import { Helmet } from 'react-helmet';

const QuestPage = () => {
  const viewTransition = useViewTransition();

  return (
    <section className={styles.container}>
      <Helmet>
        <title>Heal - Jackson Golletz</title>
      </Helmet>
      <section className={styles.scrollSection}>
        <header
          className={styles.header}
          aria-label="Heal"
          onClick={() => viewTransition("/")}
        >
          <HealLogo />
        </header>
        <article className={styles.content}>
          <p>
            Heal is a Los Angeles-based tech company that provides in-home healthcare, telemedicine, and remote patient monitoring services to Medicare patients in eight states across the country.
          </p>
          <p>
            I joined Heal as a Front-End Software Engineer in the summer of 2022. During my time with the company, I worked on a number of applications, both patient-facing and internal. For most of my tenure, I was responsible for building a new feature called &ldquo;Pods&rdquo; for the operations team’s internal web interface, which they used to perform all of their mission-critical functions, from booking visits and scheduling doctors, to routing drivers and billing insurance.
          </p>
          <p>
            In developing the Pods feature, I took on a role that was equal parts manager and engineer. I met with members of the design team to discuss their mockups and provide suggestions, worked with the product team to assess the technical implications of the features they were requesting, and coordinated with other engineers to ensure that the work was completed on time. I held weekly status meetings with stakeholders to update them on our progress, and ran daily standups with the back-end engineers assigned to Pods to ensure that any blockers they encountered were eliminated as quickly as possible. Meanwhile, I was solely responsible for developing the front-end UI for the feature.
          </p>
          <p>
            I completed the last of the development work on Pods in mid-December 2022. Later the same day, it was announced that Heal had been acquired and much of the engineering team, myself included, was being laid off. Despite my time with Heal coming to an abrupt end, I look forward to carrying the extensive experience I gained at the company onward into my next professional opportunity.
          </p>
        </article>
      </section>
      <footer className={styles.actionTray}>
        <button onClick={(e) => {e.preventDefault(); viewTransition("/");}} className={styles.action}>
          Back
        </button>
        <a href="https://dribbble.com/shots/21046386-Pods" className={styles.action}>
          View on Dribbble
        </a>
      </footer>
    </section>
  );
};

export default QuestPage;