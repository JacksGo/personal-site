/// <reference types="vite-plugin-svgr/client" />

import styles from './Ebay.module.scss';
import { ReactComponent as EbayLogo } from '../assets/ebay.svg';
import useViewTransition from '../hooks/useViewTransition';
import { Helmet } from 'react-helmet';

const EbayPage = () => {
  const viewTransition = useViewTransition();

  return (
    <section className={styles.container}>
      <Helmet>
        <title>eBay - Jackson Golletz</title>
      </Helmet>
      <div className={styles.pageInterior}>
        <section className={styles.scrollSection}>
          <header
            className={styles.header}
            aria-label="Ebay"
            onClick={() => viewTransition("/")}
          >
            <EbayLogo />
          </header>
          <article className={styles.content}>
            <p>
              eBay is a global, online retail marketplace and a household name that transcends generations. eBay was originally founded to facilitate the resale of pre-owned goods, but has since expanded into a wide array of different markets, sectors, and enthusiast niches.
            </p>
            <p>
              I joined eBay in the summer of 2023 as a front-end engineer specializing in React. Soon after I started, however, it became clear that the role I had accepted was very different from the one described during interviews. I took this as a challenge, however, and strove at every opportunity to rise to the occasion. Over the course of my time with the company, I worked on a variety of projects&mdash;some of which required me to learn the company&rsquo;s internal front-end framework, Marko, on the fly&mdash;and fulfilled a wide variety of other, full-stack developer functions. I became well-versed in our build pipelines and automation, rewrote test suites from the ground up, and learned the ins and outs of a plethora of internal tools, covering everything from content security policies and feature flags to production debugging and accessibility testing.
            </p>
            <p>
              During my tenure, I made many significant front-end contributions on a variety of projects, including building new experiences for the eBay home page, Collectibles, and the eBay Vault. I also leveraged my extensive front-end experience to spearhead improvements to legacy code, proposing refactors and incremental upgrades to parts of our codebase before they became impediments. Additionally, I found particular meaning in advocating for process improvements on behalf of my peers, and promoting a healthier, more developer-centric culture amongst our team.
            </p>
            <p>
              My time at eBay has given me a wealth of new and unexpected experiences, and a hightened appreciation for the challenges of engineering at scale. I look forward to carrying these lessons forward into my next role and beyond.
            </p>
          </article>
        </section>
        <footer className={styles.actionTray}>
          <button onClick={(e) => {e.preventDefault(); viewTransition("/");}} className={styles.action}>
            Back
          </button>
          <a href="#" onClick={e=>e.preventDefault()} aria-disabled="true" className={`${styles.action} ${styles.disabled}`}>
            Showcase coming soon
          </a>
        </footer>
      </div>
    </section>
  );
};

export default EbayPage;