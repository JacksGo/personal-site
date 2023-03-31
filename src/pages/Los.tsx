/// <reference types="vite-plugin-svgr/client" />

import styles from './Los.module.scss';
import { ReactComponent as LosLogo } from '../assets/los.svg';
import useViewTransition from '../hooks/useViewTransition';
import { Helmet } from 'react-helmet';

const LosPage = () => {
  const viewTransition = useViewTransition();

  return (
    <section className={styles.container}>
      <Helmet>
        <title>Los-token - Jackson Golletz</title>
      </Helmet>
      <div className={styles.pageInterior}>
        <section className={styles.scrollSection}>
          <header
            className={styles.header}
            aria-label="Los-token"
            onClick={() => viewTransition("/")}
          >
            <LosLogo />
          </header>
          <article className={styles.content}>
            <p>
              Los-token is a small npm package, written in TypeScript, that uses the BLAKE2 suite of cryptographic functions to provide bare-bones session validation. Its most salient use case is in applications where egress data comes at a premium and every byte sent over the wire counts; in this case, using JWT is often overkill for basic validation. By contrast, Los prioritizes compactness, sacrificing the advanced functionality and customizability of JWTs to offer simple code, short runtimes, and small token sizes.
            </p>
            <p>
              Los contains a homemade base-89 text encoder that condenses token data as much as possible while still adhering to the IETF cookie standard (RFC 6265). The package also features thorough unit testing with Jest, both for Los itself, as well as for each of the base-89 encoding and decoding functions.
            </p>
          </article>
        </section>
        <footer className={styles.actionTray}>
          <button onClick={(e) => {e.preventDefault(); viewTransition("/");}} className={styles.action}>
            Back
          </button>
          <a href="https://github.com/JacksGo/los-token" className={styles.action}>
            View repository
          </a>
        </footer>
      </div>
    </section>
  );
};

export default LosPage;