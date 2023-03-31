/// <reference types="vite-plugin-svgr/client" />
import { Helmet } from 'react-helmet';

import styles from './Markus.module.scss';
import { ReactComponent as MarkusLogo } from '../assets/markus.svg';
import useViewTransition from '../hooks/useViewTransition';

const MarkusPage = () => {
  const viewTransition = useViewTransition();

  return (
    <section className={styles.container}>
      <Helmet>
        <title>Markus - Jackson Golletz</title>
      </Helmet>
      <div className={styles.pageInterior}>
        <section className={styles.scrollSection}>
          <header
            className={styles.header}
            aria-label="Markus"
            onClick={() => viewTransition("/")}
          >
            <MarkusLogo />
          </header>
          <article className={styles.content}>
            <p>
              Markus is a web application, written in React and TypeScript, which allows a user to upload a bookmark file exported from their web browser, then generate a copy which contains only a desired subset of the input. Currently, major browsers only support full exports and imports, so this app enables a use case that is not otherwise possible.
            </p>
            <p>
              While working on this project, I discovered that, despite bookmark files being imported to and exported from the browser as HTML files, they are not syntactically valid HTML. Rather, the netscape-bookmark-file format is a mangled HTML-esque type which browsers can make sense of, but which contains no <code>head</code>, <code>body</code>, or <code>html</code> tags, and has dangling <code>&lt;p&gt;</code>s (with no corresponding closing tags) at the start and end of every folder in the document. Consequently, my initial approach of parsing the file using DOMParser and XMLSerializer worked for importing the file into the tool, but not for exporting, since XMLSerializer can only produce syntactically valid markup. In order to create a bookmark file that browsers would accept, I had to iterate the selected items and concatenate them to a string, which I found upsettingly inelegant.
            </p>
            <p>
              Markus was built using the latest version of Microsoft&rsquo;s Fluent UI framework.
            </p>
          </article>
        </section>
        <footer className={styles.actionTray}>
          <button onClick={(e) => {e.preventDefault(); viewTransition("/");}} className={styles.action}>
            Back
          </button>
          <a href="https://github.com/JacksGo/markus" className={styles.action}>
            View repository
          </a>
        </footer>
      </div>
    </section>
  );
};

export default MarkusPage;