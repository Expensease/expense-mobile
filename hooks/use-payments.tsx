import {useContext, useState} from 'react';
import {PaymentContext} from '../context/paymentContext';
import {TPayment} from '../types';

const data: TPayment[] = [
  {
    id: 1,
    amount: 98,
    membersCount: 3,
    message:
      'pleasure another drop plan giant tea mail forth drew mistake nearest loud ourselves blank begun sing which spoken capital steep grade hole wrote both',
    category: 'car',
    date: '10/10/2024',
  },
  {
    id: 2,
    amount: 57,
    membersCount: 3,
    message:
      'straw charge tropical cat mile equal choice adventure boy stepped motor rabbit blow pictured told certain trunk instant hope cell joined main song heavy',
    category: 'food',
    date: '10/10/2024',
  },
  {
    id: 3,
    amount: 60,
    membersCount: 3,
    message:
      'mail human closely toy plates neighbor brief lie occasionally gave sang power book dried heavy angry diagram nearest loud carefully slope nearly different square',
    category: 'car',
    date: '10/10/2024',
  },
  {
    id: 4,
    amount: 6,
    membersCount: 3,
    message:
      'explain frame worse so cover sheep divide principal flower slabs first applied men hill system flame kept current pride smooth fun cabin pilot married',
    category: 'hospital',
    date: '10/10/2024',
  },
  {
    id: 5,
    amount: 56,
    membersCount: 3,
    message:
      'dead area exclaimed gold hope bite machinery hand beginning dinner tone shade gift fighting farm evening army tall thumb atom describe industry wrapped canal',
    category: 'food',
    date: '10/10/2024',
  },
  {
    id: 83,
    amount: 98,
    membersCount: 3,
    message:
      'journey active mountain month lungs mental bend mind log type largest table forty hidden equally view require else shout country news victory sport worse',
    category: 'car',
    date: '10/10/2024',
  },
  {
    id: 75,
    amount: 57,
    membersCount: 3,
    message:
      'unknown lucky hour earlier choose hope skill for door slight copy number gave receive late folks cage worry real she equator husband beautiful card',
    category: 'food',
    date: '10/10/2024',
  },
  {
    id: 88,
    amount: 60,
    membersCount: 3,
    message:
      'rather tiny stared necessary lion led trade gate bread new teach empty doll duty own process too wide count party season solid main box',
    category: 'food',
    date: '10/10/2024',
  },
  {
    id: 86,
    amount: 6,
    membersCount: 3,
    message:
      'forest scientific birth easy apartment there period industry you problem snake drive income about poor adult sing although park born plane higher horn love',
    category: 'food',
    date: '10/10/2024',
  },
  {
    id: 80,
    amount: 56,
    membersCount: 3,
    message:
      'meat weigh future brief corn perfectly about detail lift physical cap globe continent answer later ill morning church factor tried native history scale mirror',
    category: 'food',
    date: '10/10/2024',
  },
];

export function usePayments() {
  const ctx = useContext(PaymentContext);
  console.log('ctx', ctx);

  if (!ctx) {
    throw new Error('Payment Context is not accessable.');
  }

  // const [payments, setPayments] = useState<TPayment[]>(data);

  return ctx;
}
