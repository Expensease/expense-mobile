export type TPayment = {
  id: number;
  amount: number;
  membersCount: number;
  message: string;
  category: string;
  date: string;
};

export type TPaymentContext =
  | {
      payments: TPayment[];
      setPayments: React.Dispatch<React.SetStateAction<TPayment[]>>;
    }
  | undefined;
