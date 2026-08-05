import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

/* The landing page leads with the actual product. The library ships 439
   widget captures (60 of them animated) and 92 screenshotted example apps —
   showing those is more persuasive than any adjective, and it is the same
   reason atlasgo.io leads with real terminal output instead of stock art. */

const WIDGET_REEL = [
  { file: 'liquidgauge', label: 'QCustomLiquidGauge' },
  { file: 'nodegraph', label: 'QCustomNodeGraph' },
  { file: 'commandpalette', label: 'QCustomCommandPalette' },
  { file: 'areachart', label: 'QCustomAreaChart' },
  { file: 'progressring', label: 'QCustomProgressRing' },
  { file: 'carousel', label: 'QCustomCarousel' },
  { file: 'emojipicker', label: 'QCustomEmojiPicker' },
  { file: 'codeeditor', label: 'QCustomCodeEditor' },
];

const APP_REEL = [
  { file: 'glasshome', label: 'GlassHome', blurb: 'Glassmorphism smart-home dashboard' },
  { file: 'financedashboard', label: 'Finance Dashboard', blurb: 'Charts, tables and KPI tiles' },
  { file: 'nodestudio', label: 'NodeStudio', blurb: 'Node editor with a live code panel' },
  { file: 'aurorachat', label: 'AuroraChat', blurb: 'Component-based messenger' },
];

/* 164 is the generated ground truth: docs/gallery.mdx — written by
   tools/gen_widget_docs.py from the tiering manifest — contains exactly 164
   `wg-card` entries and 23 `wg-pro` badges. The hand-written "163" that was
   scattered across the READMEs, blogs and release notes was stale; every
   surface was reconciled to 164 on 2026-08-05. Animated count is 60, which is
   what `ls static/img/showcase/*.gif | grep -v -- -dark` returns (the gallery
   prose claimed 61). */
const STATS = [
  { value: '164', label: 'widgets' },
  { value: '92', label: 'example apps' },
  { value: '60', label: 'animated' },
  { value: '23', label: 'in Pro' },
];

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span className={styles.version}>v2.3.1</span>
            <span className={styles.dot} />
            Free core under GPLv3
          </p>

          <Heading as="h1" className={styles.heroTitle}>
            Desktop widgets for PySide6 that don’t look like 2009.
          </Heading>

          <p className={styles.heroSubtitle}>
            {siteConfig.tagline} 164 themed widgets, authorable directly in Qt
            Designer, with JSON&nbsp;/&nbsp;QSS design tokens and 92 runnable
            example applications.
          </p>

          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/Introduction/intro">
              Get started
            </Link>
            <Link className="button button--secondary button--lg" to="/gallery">
              Browse the gallery
            </Link>
          </div>

          <div className={styles.install}>
            <CodeBlock language="bash">pip install QT-PyQt-PySide-Custom-Widgets</CodeBlock>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <img
            src={useBaseUrl('/img/showcase-apps/glasshome.png')}
            alt="GlassHome — a smart-home dashboard built with Custom Widgets"
            width={960}
            height={590}
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}

function Stats() {
  return (
    <section className={styles.stats} aria-label="Library at a glance">
      <div className={styles.statsInner}>
        {STATS.map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statValue}>{value}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WidgetReel() {
  /* withBaseUrl, not the useBaseUrl hook: this is called inside .map(), and a
     hook must not run in a loop even when the array length happens to be
     constant. */
  const {withBaseUrl} = useBaseUrlUtils();
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <Heading as="h2" className={styles.sectionTitle}>
          Every widget documented, 60 of them animated
        </Heading>
        <p className={styles.sectionLede}>
          Reference pages are generated from the widget catalogue, so the
          screenshots and API tables cannot drift from the code. These are
          real captures, and they follow the site theme.
        </p>
      </div>

      <div className={styles.reel}>
        {WIDGET_REEL.map(({ file, label }) => (
          <figure key={file} className={styles.reelItem}>
            <ThemedImage
              alt={label}
              sources={{
                light: withBaseUrl(`/img/showcase/${file}.gif`),
                dark: withBaseUrl(`/img/showcase/${file}-dark.gif`),
              }}
              loading="lazy"
            />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>

      <Link className={styles.sectionLink} to="/gallery">
        See all 164 widgets →
      </Link>
    </section>
  );
}

const FEATURES = [
  {
    title: 'Authorable in Qt Designer',
    body: `Every widget registers as a Designer plugin with its properties exposed, so you lay out screens visually instead of hand-writing setup code. A Custom Properties dock covers the ones Qt cannot introspect.`,
  },
  {
    title: 'Theming that is actually a system',
    body: `Design tokens drive light, dark and custom themes through JSON and QSS. Switch by name at runtime; icons recolour with the palette rather than shipping two copies of every asset.`,
  },
  {
    title: '92 apps you can run, not screenshots',
    body: `Dashboards, a messenger, a node editor, a music player — each a complete project with ui/, compiled src/, themed Qss/ and icons, verified headlessly so the examples cannot rot.`,
  },
];

function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.featureGrid}>
        {FEATURES.map(({ title, body }) => (
          <div key={title} className={styles.feature}>
            <Heading as="h3" className={styles.featureTitle}>
              {title}
            </Heading>
            <p className={styles.featureBody}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppReel() {
  const {withBaseUrl} = useBaseUrlUtils();
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <Heading as="h2" className={styles.sectionTitle}>
          Built with Custom Widgets
        </Heading>
        <p className={styles.sectionLede}>
          Every example is a real, runnable project in the repository.
        </p>
      </div>

      <div className={styles.appGrid}>
        {APP_REEL.map(({ file, label, blurb }) => (
          <Link
            key={file}
            className={styles.appCard}
            to="/Usage-Examples/AppShowcase">
            <img
              src={withBaseUrl(`/img/showcase-apps/${file}.png`)}
              alt={label}
              loading="lazy"
            />
            <div className={styles.appMeta}>
              <span className={styles.appName}>{label}</span>
              <span className={styles.appBlurb}>{blurb}</span>
            </div>
          </Link>
        ))}
      </div>

      <Link className={styles.sectionLink} to="/Usage-Examples/AppShowcase">
        See all 92 applications →
      </Link>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className={styles.cta}>
      <Heading as="h2" className={styles.ctaTitle}>
        Start with one <code>pip install</code>
      </Heading>
      <p className={styles.ctaLede}>
        The core is free and GPLv3. Pro adds DataTable Pro — virtualization,
        server-side sort and filter push-down, grouping, pivot and export.
      </p>
      <div className={styles.heroActions}>
        <Link className="button button--primary button--lg" to="/Introduction/intro">
          Read the docs
        </Link>
        <Link className="button button--secondary button--lg" to="/gallery">
          Browse widgets
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="164 themed PySide6 and PyQt6 widgets, authorable in Qt Designer, with design-token theming and 92 runnable example applications.">
      <Hero />
      <main>
        <Stats />
        <WidgetReel />
        <Features />
        <AppReel />
        <ClosingCta />
      </main>
    </Layout>
  );
}
