/// <reference types="vite-plugin-svgr/client" />

import styles from './Quest.module.scss';
import { ReactComponent as QuestLogo } from '../assets/quest.svg';
import useViewTransition from '../hooks/useViewTransition';
import { Helmet } from 'react-helmet';

const QuestPage = () => {
  const viewTransition = useViewTransition();

  return (
    <section className={styles.container}>
      <Helmet>
        <title>Quest.fan - Jackson Golletz</title>
      </Helmet>
      <section className={styles.scrollSection}>
        <header
          className={styles.header}
          aria-label="Quest.fan"
          onClick={() => viewTransition("/")}
        >
          <QuestLogo />
        </header>
        <article className={styles.content}>
          <p>
            Quest.fan is a web application, written in React, which allows players of the tabletop role-playing game Quest to easily create, manage, and share their characters&rsquo; information with the other players in their group.
          </p>
          <p>
            The project was born out of necessity in the early days of the pandemic, at a time when meeting in person and physically sharing character sheets was neither safe nor practical. I created the first iteration of the site in just over a week using React&rsquo;s Context API for state management, then later rewrote it from scratch using Redux Toolkit as a learning exercise. In the months following the initial release, I worked diligently to add new features and address issues as they were brought to my attention.
          </p>
          <p>
            From the outset, I knew that to minimize the friction of switching to a digital system, I wanted the site to function as similarly as possible to the physical game. I researched the company&rsquo;s branding, created numerous mockups, and brainstormed ways to preserve the familiarity of Quest while eliminating pain points that were present in the pen-and-paper game.
          </p>
          <p>
            I also invested heavily in improving accessibility in the transition from physical to digital. In addition to conducting ad hoc, informal user testing, I extensively tested the website using multiple screen readers and referenced the WAI-ARIA standard throughout the development process.
          </p>
        </article>
      </section>
      <footer className={styles.actionTray}>
        <button onClick={(e) => {e.preventDefault(); viewTransition("/");}} className={styles.action}>
          Back
        </button>
        {/* <div className={styles.actionDivider}></div> */}
        <a href="https://quest.fan/" className={styles.action}>
          Visit site
        </a>
      </footer>
    </section>
  );
};

export default QuestPage;