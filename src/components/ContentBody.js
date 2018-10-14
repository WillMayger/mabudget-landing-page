import React from 'react';
import Section from './ui/Section';
import Paragraph from './ui/Paragraph';
import Heading from './ui/Heading';
import Image from './ui/Image';

import mabudgetExpli from './assets/mabudgetExpli.jpg';
import monthlyBudget from './assets/monthlyBudget.jpg';
import mandatory from './assets/mandatory.jpg';
import discretionary from './assets/discretionary.jpg';
import fam from './assets/fam.jpg';

import './styles/content-body/content-body.scss';

const ContentBody = () => (
  <div className="content-body">
    <Section noanim>
      <Heading>What is MaBudget?</Heading>
      <Paragraph>
        Mabudget, the monthly budget app, without complexity, is designed to make it easy for you to keep a monthly budget. It helps you to plan your regular monthly finances and convert them into a regular monthly budget enabling you to take control of your finances, save more money, and lower your stress as you will know exactly what is happening with your finances with a glance at MaBudget monthly budget. MaBudget takes a different approach than most monthly budgeters you will see. It uses the idea of Mandatory and discretionary spending as a core principle of the monthly budgeter.
      </Paragraph>
      <Image src={mabudgetExpli} alt="MaBudget monthly budget" />
    </Section>
    <Section>
      <Heading>What is a monthly budget?</Heading>
      <Paragraph>
      A monthly budget is a way you can track your income and outgoings to enable you to have control of your finances, it it very easy to lose track of income as well as bills. Having a monthly budget can give you freedom as it will track these things for you, meaning you won’t have to worry about your finances anymore. A key thing to remember with a budget is the more accurate you are, the more it will benefit you.
      </Paragraph>
      <Image src={monthlyBudget} alt="monthly budget" />
    </Section>
    <Section>
      <Heading>What is mandatory spending?</Heading>
      <Paragraph>
      Mandatory spending is where you need to spend your hard earned income on things that you need to be able to live your live. This could be your rent, food, utility bills, or more. MaBudget uses this to split your bills into two caratories, Mandatory spending being the first. This way you can easily filter through what you actually need vs what you just want.
      </Paragraph>
      <Image src={mandatory} alt="mandatory spending" />
    </Section>
    <Section>
      <Heading>What is discretionary spending?</Heading>
      <Paragraph>
      Discretionary spending is where you spend money on things you don’t necessarily need, this could be a gym membership for example. When you define your bills like this it makes it very easy to budget effectively and start cutting out bills you might not actually need.
      </Paragraph>
      <Image src={discretionary} alt="discretionary spending" />
    </Section>
    <Section>
      <Heading>Why should you use a monthly budget?</Heading>
      <Paragraph>Budgeting can lead to financial freedom. You have to start somewhere, and for your finances and financial independence, its starts with a monthly budget, by taking control of what you have so you can use it in the best way you can. Aside from the obvious financial benefits, a monthly budget will also help to reduce stress as it will mean you will worry less about your bank account. If you choose to download MaBudget, we include a few features that will help you see, at a glance.</Paragraph>
      <Image src={fam} alt="family" />
    </Section>
  </div>
);

export default ContentBody;
