import React from "react";
import { getToday } from "../utils/date";
import { getDayBalance, type Transaction } from "@/entities/transaction";

type DayCellProps = {
  day: Date | null;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  transactions: Transaction[];
};

export const DayCell: React.FC<DayCellProps> = ({
  day,
  selectedDate,
  onSelectDate,
  transactions,
}) => {
  if (!day) {
    return (
      <div className="h-[9.938rem] w-[9.938rem] rounded-4xl bg-surface-4" />
    );
  }

  const balance = getDayBalance(transactions, day);

  const today = getToday();

  const isToday =
    day &&
    day.getDate() === today.getDate() &&
    day.getMonth() === today.getMonth() &&
    day.getFullYear() === today.getFullYear();

  const isSelected =
    selectedDate &&
    day.getDate() === selectedDate.getDate() &&
    day.getMonth() === selectedDate.getMonth() &&
    day.getFullYear() === selectedDate.getFullYear();

  return (
    <div
      onClick={() => onSelectDate(day)}
      className={`h-[9.938rem] w-[9.938rem] rounded-4xl p-3 text-sm bg-input cursor-pointer flex flex-col items-start justify-between ${
        isSelected ? "bg-primary" : ""
      }`}
    >
      <div className="w-full">
        {day && (
          <div
            className={`text-2xl w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-xl ${
              isToday ? "bg-primary" : ""
            }`}
          >
            {day.getDate()}
          </div>
        )}
      </div>
      <p
        className={`text-lg 
        ${balance > 0 ? "text-green-500" : "text-red-500"}`}
      >
        {balance != 0 ? `${balance}` : ""}
      </p>
    </div>
  );
};
