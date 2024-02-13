import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.cloak}></div>
        </div>
      </div>
      <h1 className={styles.title}>404</h1>
      <div className={styles.info}>
        <h2>We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on its behalf.
        </p>
        <a className={styles.link} href="/">
          Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
