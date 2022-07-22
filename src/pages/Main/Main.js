import React from 'react'
import mainImage from '../../assets/images/mainImage.png'
import trustpilot from '../../assets/images/trustpilot.png'
import Heading from '../../components/Heading/Heading'
import { Button, buttonSize, buttonType } from '../../components/Button/Button'
import { ClearState } from '../../utils/ClearState'
import styles from './Main.module.scss'

export const Main = () => {
  ClearState()
  return (
    <div className={styles.root}>
      <div className={styles.mainWrap}>
        <div className={styles.mainTitleWrap}>
          <div className={styles.mainTitle}>
            <Heading level={1}>
              Best way to Sell and Buy Crypto
            </Heading>
            <p>
              with P2P, buy and sell instantly
            </p>
            <Button
              url={'/crypto/buy/btc/usd'}
              title={'Buy crypto'}
              size={buttonSize.Small}
            />
            <div className={styles.trustpilot}>
              <p>
                Rated by 41,787 people on
              </p>
              <img src={trustpilot} alt={'trustpilot image'}/>
            </div>
          </div>
          <div>
            <div className={styles.imageWrap}>
              <img src={mainImage} alt='mainImage'/>
            </div>
          </div>
        </div>
        <div className={styles.getStartedBlock}>
          <Heading level={2} color={'White'}>Get started</Heading>
          <div className={styles.buttonGetStartedWrap}>
            <div className={styles.buttonGetStartedBlock}>
              <div className={styles.buttonWrap}>
                <Button
                  color={'White'}
                  typeCurrency={buttonType.BTC}
                  url={'/crypto/buy/btc/usd'}
                  title={'Buy Bitcoin'}
                  size={buttonSize.BlockSize}
                />
              </div>
              <div className={styles.buttonWrap}>
                <Button
                  color={'White'}
                  typeCurrency={buttonType.USDT}
                  url={'/crypto/buy/usdt/usd'}
                  title={'Buy Tether'}
                  size={buttonSize.BlockSize}
                />
              </div>
            </div>
            <div className={styles.buttonGetStartedBlock}>
              <div className={styles.buttonWrap}>
                <Button
                  color={'White'}
                  typeCurrency={buttonType.ETH}
                  url={'/crypto/buy/eth/usd'}
                  title={'Buy Ethereum'}
                  size={buttonSize.BlockSize}
                />
              </div>
              <div className={styles.buttonWrap}>
                <Button
                  color={'White'}
                  typeCurrency={buttonType.USDC}
                  url={'/crypto/buy/usdc/usd'}
                  title={'Buy USD Coin'}
                  size={buttonSize.BlockSize}
                />
              </div>
            </div>
            <div className={styles.buttonGetStartedBlock}>
              <div className={styles.buttonWrap}>
                <Button
                  color={'White'}
                  typeCurrency={buttonType.BNB}
                  url={'/crypto/buy/bnb/usd'}
                  title={'Buy Binance Coin'}
                  size={buttonSize.BlockSize}
                />
                </div>
              <div className={styles.buttonWrap}>
                <Button
                  color={'White'}
                  typeCurrency={buttonType.BUSD}
                  url={'/crypto/buy/busd/usd'}
                  title={'Buy Binance USD'}
                  size={buttonSize.BlockSize}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
