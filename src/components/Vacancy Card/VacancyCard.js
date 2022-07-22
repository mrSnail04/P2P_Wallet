import React from 'react'
import Heading from '../Heading/Heading'
import vacancyData from '../../assets/data/vacancy.json'
import styles from './VacancyCard.module.scss'

export const VacancyCard = () => {
  const arr = []
  Object.keys(vacancyData).forEach(key => arr.push({ name: key, value: vacancyData[key] }))
  return (
    <>
      {arr.map((item, index) => {
        return (
          <div key={index}>
            <Heading level={4}> {item.name} </Heading>
            <div>
              {item.value.map(vacancy => {
                return (
                  <div key={vacancy.id} className={styles.card}>
                    <p className={styles.vacancyTitle}> {vacancy.title} </p>
                    <p className={styles.vacancyDescription}> {vacancy.description} </p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </>
  )
}
