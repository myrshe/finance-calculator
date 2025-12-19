import type{ Transaction } from "./types";

const formatDateToYMD = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const getTransactionsByDay = (transactions: Transaction[], date: Date | null): Transaction[] => {
    if (!date) return [];
    const target = formatDateToYMD(date);


    return transactions.filter((transactions) => transactions.date === target);
}

export const getDayBalance = (transactions: Transaction[], date: Date): number => {
    const target = formatDateToYMD(date);
     return transactions.filter((t) => t.date === target).reduce((sum, t) => {
         return t.type === "income" ? sum + t.amount : sum - t.amount;}, 0);
}
