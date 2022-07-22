import React from 'react'
import Heading from '../../components/Heading/Heading'
import { VacancyCard } from '../../components/Vacancy Card/VacancyCard'
import { ClearState } from '../../utils/ClearState'
import styles from './Careers.module.scss'

export const Careers = () => {
  ClearState()
  return (
    <div className={styles.root}>
      <div className={styles.careersWrap}>
        <div className={styles.heading}>
          <Heading level={1}>
            Working at CoinSwap
          </Heading>
        </div>
        <div className={styles.description}>
          <p>
            We are a fully remote, global team and we pride ourselves on having a connected
            and inclusive culture that empowers people to do their best work. We give our team
            autonomy to move fast, innovate and take responsibility. In the same way the internet
            became a means to democratize information, cryptocurrency is becoming a means to democratize
            financial participation at scale.
          </p>
          <p>
            Join our mission to make crypto accessible to over a billion people by 2030! 🚀
          </p>
        </div>
        <div className={styles.vacancyHeading}>
          <p>
            Current openings
          </p>
        </div>
        <div>
          <VacancyCard/>
        </div>
      </div>
    </div>
  )
}
