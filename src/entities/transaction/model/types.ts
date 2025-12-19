export type TransactionType = "income" | "expense";

export type Transaction = {
  id: string;
  category: string;
  amount: number;
  type: TransactionType;
  date: string; 
  description?: string;
};
