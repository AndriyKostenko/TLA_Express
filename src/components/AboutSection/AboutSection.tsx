import styles from './AboutSection.module.css';

export const AboutSection = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.randomAreas}>
                <div className={`${styles.randomArea} ${styles.area1}`}></div>
                <div className={`${styles.randomArea} ${styles.area2}`}></div>
            </div>
        </section>
    )
}