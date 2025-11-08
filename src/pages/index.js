import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container text-center">
        {/* Optional logo/banner image */}
        <img
          src="/img/social-card.png"
          alt="Qt Custom Widgets Banner"
          className={`${styles.heroImage} mx-auto mb-6 rounded-xl shadow-lg`}
        />


        <Heading as="h1" className="hero__title text-white">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle text-gray-100">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/Introduction/intro">
            Get Started with Qt Widgets
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Comprehensive documentation for PyQt and PySide custom widgets, tools, and theming options">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
