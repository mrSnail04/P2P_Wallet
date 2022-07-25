import React from 'react'
import Heading from '../../components/Heading/Heading'
import { ClearState } from '../../utils/ClearState'
import styles from './About.module.scss'

export const About = () => {
  ClearState()
  return (
    <div className={styles.root}>
      <div className={styles.aboutWrap}>
        <div className={styles.headingFirst}>
          <Heading level={1}>
            We believe in crypto
          </Heading>
        </div>
        <div className={styles.description}>
          <p>
            CoinSwap launched in 2020 with a simple aim: increase cryptocurrency adoption.
          </p>
          <p>
            In November 2022, just two years later, we closed our Series A funding round at $555 million,
            bringing our valuation to $3.4 billion — the largest and highest valued Series A
            for any bootstrapped crypto company. As we continue to grow at a tremendous pace,
            we’re using this funding to invest in global expansion and world-class talent.
          </p>
        </div>
        <div className={styles.infoAbout}>
          <div className={styles.infoBlock}>
            <p className={styles.infoItem}>
              $3.4B
            </p>
            <p className={styles.infoItemDescription}>
              Valuation
            </p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoItem}>
              &#36;2B+
            </p>
            <p className={styles.infoItemDescription}>
              Crypto delivered
            </p>
          </div >
          <div className={styles.infoBlock}>
            <p className={styles.infoItem}>
              1700%+
            </p>
            <p className={styles.infoItemDescription}>
              Growth
            </p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoItem}>
              5M+
            </p>
            <p className={styles.infoItemDescription}>
              Customers
            </p>
          </div>
          <div className={styles.infoBlock}>
            <p className={styles.infoItem}>
              80+
            </p>
            <p className={styles.infoItemDescription}>
              Assets supported
            </p>
          </div>
        </div>
        <div>
          <div className={styles.headingSecond}>
            <Heading level={1}>
              Building a more sustainable future
            </Heading>
            <p>
              We understand the value of anticipating the needs of tomorrow.
              As a global enterprise, we’re doing our part to safeguard the future of our planet and society.
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}
