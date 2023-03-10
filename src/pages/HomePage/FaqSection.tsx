import React, { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import SectionTitleSash1 from "../../components/SectionTitleSash1";
import { Icon } from "@iconify/react";

/* ----------------------------------------------------------- */

interface IFaq {
  id: number;
  question: string;
  answer: string;
}

const FAQS: Array<IFaq> = [
  {
    id: 1,
    question: 'Can I buy on PancakeSwap?',
    answer: 'GAS WIZARD is not yet available on Pancakeswap.'
  },
  {
    id: 2,
    question: 'What is the Smart Contract Address?',
    answer: 'GAS WIZARD official SMART CONTRACT ADDRESS: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
    id: 3,
    question: 'What is the Utility of Gas Wizard Finance?',
    answer: 'Gas Wizard allows holders to obtain discounts, free gas & EV charging rewards. Soon to launch an APP that will allow payment at participating gas stations.'
  },
  {
    id: 4,
    question: 'Where is the team based out of?',
    answer: 'The team is based out of Texas, USA. Currently expanding throughout the US & plans to expand internationally!'
  },
  {
    id: 5,
    question: 'Who are the founders, are they doxxed?',
    answer: 'Please check KYC and SAFU'
  },
  {
    id: 6,
    question: 'White paper?',
    answer: 'WHITEPAPER'
  },
  {
    id: 7,
    question: 'How can I get in contact with Gas Wizard Finance?',
    answer: 'For the fastest response you can communicate with us in the telegram chat. An admin or moderator will respond to you. You can also contact us at info@gaswizard.finance'
  },
  {
    id: 8,
    question: 'Can I purchase merchandise if I am outside the US?',
    answer: 'Currently we do not sell merchandise outside of the US directly from our store.'
  },
  {
    id: 9,
    question: 'I am interested in becoming a partner',
    answer: 'Email us at info@gaswizard.finance and one of our associates will get in contact with you to go over details.'
  }
]

/* ----------------------------------------------------------- */

export default function FaqSection() {
  const [openedAccordion, setOpenedAccordion] = useState<Number>(0)

  const handleAccordion = (faqId: number) => {
    if (openedAccordion === faqId) {
      setOpenedAccordion(0)
    } else {
      setOpenedAccordion(faqId)
    }
  }
  return (
    <div className="container max-w-6xl mx-auto flex flex-col items-center gap-8">
      <h2 className="text-3xl lg:text-4xl font-black text-center uppercase leading-snug text-darkPrimary">
        Frequently Asked Questions
      </h2>

      <SectionTitleSash1 leftColor="darkPrimary" rightColor="primary" />

      <div className="w-full flex flex-col gap-2 px-6 lg:px-0">
        {FAQS.map((faqItem: IFaq) => (
          <Accordion
            key={faqItem.id}
            open={openedAccordion === faqItem.id}
            icon={openedAccordion === faqItem.id ? (
              <Icon icon="material-symbols:keyboard-arrow-down-rounded" />
            ) : (
              <Icon icon="material-symbols:arrow-forward-ios-rounded" className="text-darkPrimary text-xs" />
            )}
          >
            <AccordionHeader
              onClick={() => handleAccordion(faqItem.id)}
              className="border-none text-white hover:text-white bg-primary py-7 px-7 rounded-lg text-left text-base lg:text-lg"
            >
              {faqItem.question}
            </AccordionHeader>
            <AccordionBody className="px-7 py-8 text-base text-darkPrimary">
              {faqItem.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  )
}