import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Customizable Widgets',
    Img: require('@site/static/img/customizable.png').default,
    description: (
      <>
        Craft exactly what you need with fully customizable PyQt and PySide widgets. 
        Modify every aspect to match your vision without limitations or workarounds.
      </>
    ),
  },
  {
    title: 'Dynamic Theming',
    Img: require('@site/static/img/dynamic.png').default,
    description: (
      <>
        Switch between light, dark, or custom themes effortlessly. Deliver modern, 
        accessible applications that adapt to user preferences automatically.
      </>
    ),
  },
  {
    title: 'Enhanced UI Components',
    Img: require('@site/static/img/enhanced.png').default,
    description: (
      <>
        Elevate your applications with professional components—animated progress bars, 
        smart tooltips, and elegant modals that work seamlessly with PyQt and PySide.
      </>
    ),
  },
];


function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureCard)}>
        <div className={styles.featureIconContainer}>
          <img src={Img} alt={title} className={styles.featureImg} />
        </div>
        <div className={clsx('text--center padding-horiz--md', styles.featureContent)}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}