import styles from '../styles/About.module.css';
import App from 'next/app';

export default function about() {
    return (
        <><h1 className={styles.title}>Pranav</h1><p className={styles.subtitle}>
            I am a seeker, wandering through the realms of thought and action, led
            by an unquenchable thirst to know and to become. My days are spent
            unraveling the mysteries of existence, studying the nature of
            consciousness, and questioning the reality of the self. Through
            philosophy, I seek to understand the essence of being; through creation,
            I strive to mirror the harmony of the cosmos.
            In the digital world, I explore the architectures of Web 2.0 and Web 3.0, the language of
            security, and the intricate logic of smart contracts. I build with tools
            like React, Next.js, and Angular—not merely to create, but to align my
            work with the patterns of order and reason. Yet these pursuits, though
            meaningful, are but steps on a larger path.
            For the ultimate aim is not
            to add to the "I" but to dissolve it. To transcend the self and merge
            with the infinite, the eternal union where boundaries fall away, and all
            that remains is oneness. This is the journey—an endless unfolding, a
            return to the source.
        </p><p>
                <a
                    href="https://github.com/pranavjadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    GitHub
                </a>{" "}
                |{" "}
                <a
                    href="https://linkedin.com/in/pranavjadav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    LinkedIn
                </a>
            </p></>
  );
}

