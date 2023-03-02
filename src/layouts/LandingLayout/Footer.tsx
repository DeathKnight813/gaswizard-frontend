import React from 'react'
import { Icon } from '@iconify/react';
import { Button } from '@material-tailwind/react';

interface IProps {
  className?: string;
}

export default function Footer({ className = '' }: IProps) {
  return (
    <div className={className}>
      <div className="bg-darkPrimary py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-12 items-center">
            <div className="col-span-1 flex flex-col gap-6">
              <div>
                <img src="/assets/images/main-logo.png" alt="main-logo" className="w-32" />
              </div>

              <p className="text-white">
                Gas Wizard Finance is a crypto fueled GAS & EV payment and savings solution that is becoming the 1st on or off chain platform rewarding token holders with FREE gas.
              </p>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-12">
                <div className="col-span-1 flex flex-col items-center gap-20">
                  <div className="w-full flex items-center justify-between">
                    <Button variant="text" className="bg-secondary hover:bg-secondary rounded-none text-white text-base capitalize">
                      Buy $GWIZ
                    </Button>
                    <div className="flex items-center gap-1">
                      <a href="#" className="bg-primary w-12 h-12 rounded-lg flex flex-col justify-center items-center">
                        <Icon icon="ic:baseline-telegram" className="text-3xl" />
                      </a>
                      <a href="#" className="bg-primary w-12 h-12 rounded-lg flex flex-col justify-center items-center">
                        <Icon icon="mdi:twitter" className="text-3xl" />
                      </a>
                    </div>
                  </div>

                  <p className="text-lg text-white uppercase text-center font-bold">
                    SMART CONTRACT ADDRESS:<br />
                    <span className="text-primary">XXXXXXXXXXXXXX</span>
                  </p>
                </div>

                <div className="col-span-1 flex flex-col items-center gap-6">
                  <h3 className="text-white font-bold text-center uppercase text-xl">
                    CONTACT GAS WIZARD
                  </h3>
                  <div className="flex flex-col gap-3">
                    <Button
                      variant="text"
                      className="flex items-center gap-2 text-white text-lg normal-case font-semibold transition hover:text-primary"
                    >
                      <Icon icon="file-icons:telegram" />
                      Telegram Chat
                    </Button>

                    <Button
                      variant="text"
                      className="flex items-center gap-2 text-white text-lg normal-case font-semibold transition hover:text-primary"
                    >
                      <Icon icon="ic:baseline-email" />
                      info@gaswizard.finance
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary py-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <h4 className="text-white font-bold text-center">
            Copyright © 2022 GAS WIZARD FINANCE Token All Rights Reserved
          </h4>
          <p className="text-white text-center">
            The Information Provided On This Website Does Not Constitute Investment Advice, Financial Advice, Trading Advice, Or Any Other Sort Of Advice And You Should Not Treat Any Of The Website’s Content As Such. Cryptocurrency Investments Are Volatile And High Risk In Nature. Do Not Invest More Than What You Can Afford To Lose.
          </p>
        </div>
      </div>
    </div>
  )
}