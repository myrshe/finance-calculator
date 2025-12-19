import type { Transaction } from "./types";

export const transactionsMock: Transaction[] = [
  {
    id: "1",
    category: "зарплата",
    amount: 35000,
    type: "income",
    date: "2025-12-01",
    description: "Зарплата",
  },
  {
    id: "2",
    category: "еда",
    amount: 500,
    type: "expense",
    date: "2025-12-05",
    description: "кофе на прогулке",
  },
  {
    id: "3",
    category: "одежда",
    amount: 5000,
    type: "expense",
    date: "2025-12-07",
    description: "новая куртка",
  },
  {
    id: "4",
    category: "перевод",
    amount: 2000,
    type: "income",
    date: "2025-12-07",
    description: "перевод от мама",
  },
];