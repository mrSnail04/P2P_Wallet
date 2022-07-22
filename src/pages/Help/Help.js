import React from 'react'
import Heading from '../../components/Heading/Heading'
import { ClearState } from '../../utils/ClearState'
import styles from './Help.module.scss'

export const Help = () => {
  ClearState()
  return (
    <div className={styles.root}>
      <div className={styles.helpWrap}>
        <div className={styles.helpHeading}>
          <Heading level={3}>
            Customer Support Help Center
          </Heading>
          <p>
            FAQ for individual customers
          </p>
        </div>
        <div className={styles.questionsBlock}>
          <ul>
            <li>
              <p className={styles.question}> What is CoinSwap? </p>
            </li>
          </ul>
          <p className={styles.answer}>
            CoinSwap is a financial technology company that builds payments infrastructure
            for crypto. Our on-and-off-ramp suite of products provides a seamless experience
            for converting between fiat currencies and cryptocurrencies using all major
            payment methods including debit and credit card, local bank transfers, Apple Pay,
            Google Pay, and Samsung Pay. CoinSwap is active in more than 160 countries
            and is trusted by 250+ leading wallets, websites, and applications to accept
            payments and defeat fraud.
          </p>
          <ul>
            <li>
              <p className={styles.question}> Which cryptocurrencies do you support? </p>
            </li>
          </ul>
          <p className={styles.answer}> We support </p>
          <div className={styles.cryptocurrencies}>
            <ul>
              <li> BTC</li>
              <li> ETH</li>
              <li> BNB</li>
              <li> USDT</li>
              <li> USDC</li>
              <li> BUSD</li>
            </ul>
          </div>
          <ul>
            <li>
              <p className={styles.question}> What fees do you charge? </p>
            </li>
          </ul>
          <p className={styles.answer}>
            We charge under 1% comission for buying / selling crypto with using your
            credit or debit card. The fee is based on the blockchain network conditions
            and will be displayed within the widget before you make the payment.
          </p>
          <ul>
            <li>
              <p className={styles.question}> How can I get a wallet address? </p>
            </li>
          </ul>
          <p className={styles.answer}>
            You’ll need your own cryptocurrency wallet to receive and store cryptocurrency,
            as CoinSwap is a third-party crypto on-ramp/off-ramp, and we don’t hold your funds
            or provide wallet applications.
          </p>
          <ul>
            <li>
              <p className={styles.question}> How can I contact you? </p>
            </li>
          </ul>
          <p className={styles.answer}>
            For all inquiries, please submit a request at our support centre and we’ll
            get back to you as soon as we can. Please note you can expect to hear back
            from us within 24 hours.
          </p>
          <ul>
            <li>
              <p className={styles.question}> What are your business hours? </p>
            </li>
          </ul>
          <p className={styles.answer}>
            You can use MoonPay 24 hours a day, seven days a week, 365 days a year!
            We have support staff located all across the globe, meaning you’ll never
            have to wait too long if you need help.
          </p>
          <ul>
            <li>
              <p className={styles.question}>
                  How long does it take to receive cryptocurrency after making a card payment?
              </p>
            </li>
          </ul>
          <p className={styles.answer}>
            Card payments are processed immediately. For first time transactions,
            this can take between a few minutes and a few hours, depending on
            additional verification that may be required.
          </p>
          <br/>
          <p className={styles.answer}>
            Most subsequent transactions will be processed within about 20 minutes,
            but occasionally during periods where we’re receiving an unusually large
            amount of orders or we’re running additional checks, it may take longer.
          </p>
        </div>
      </div>
    </div>
  )
}
