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
        Mabudget, monthly budget planner app, without complexity, is designed to make it easy for you to keep a monthly budget planned out. It helps you to plan your regular monthly finances and convert them into a regular monthly budget enabling you to take control of your finances, save more money, and lower your stress as you will know exactly what is happening with your finances with a glance with MaBudget monthly budget planner. MaBudget takes a different approach than most monthly budget planner`s you will see. It uses the idea of Mandatory and discretionary spending as a core principle of the monthly budget planner.
      </Paragraph>
      <Image src={mabudgetExpli} alt="MaBudget monthly budget planner" />
    </Section>
    <Section>
      <Heading>What is a monthly budget planner?</Heading>
      <Paragraph>
        A monthly budget planner is a way you can plan out your monthly incomes and outgoings to enable you to have control of your finances, as it very easy to lose track of incomes as well as bills. Having a monthly budget planner can give you freedom as it will help you to plan out and track these things for you, meaning you won’t have to worry about your finances anymore. A key thing to remember with a monthly budget planner is the more accurate you are, the more it will benefit you.
      </Paragraph>
      <Image src={monthlyBudget} alt="monthly budget planner" />
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
        Discretionary spending is where you spend money on things you don’t necessarily need, this could be a gym membership for example. When you define your bills like this it makes it very easy to plan your monthly budget effectively and start cutting out bills you might not actually need.
      </Paragraph>
      <Image src={discretionary} alt="discretionary spending" />
    </Section>
    <Section>
      <Heading>Why should you use a monthly budget planner?</Heading>
      <Paragraph>Budgeting can lead to financial freedom. You have to start somewhere, and for your finances and financial independence, its starts with a monthly budget planner, by taking control of what you have so you can use it in the best way you can. Aside from the obvious financial benefits, a monthly budget planner will also help to reduce stress as it will mean you will worry less about your bank account. If you choose to download MaBudget, we include a few features that will help you see, at a glance.</Paragraph>
      <Image src={fam} alt="family" />
    </Section>
  </div>
);

export default ContentBody;
