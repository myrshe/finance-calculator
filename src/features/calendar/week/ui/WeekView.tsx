import React from "react";
import { getWeekDays } from "../utils/date";
import {  DayCell} from "./DayCell.tsx"
import { transactionsMock, getTransactionsByDay } from "@/entities/transaction";


type WeekViewProps = {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
};

const WeekDays = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

export const WeekView: React.FC<WeekViewProps> = ({
  currentDate,
  selectedDate,
  onSelectDate,
}) => {
  const days = getWeekDays(currentDate);

  return (
    <>
      <div className="grid grid-cols-7 gap-[4px] ">
        {WeekDays.map((day) => (
          <p
            key={day}
            className="flex justify-center items-center  mt-[13px] text-lg"
          >
            {day}
          </p>
        ))}
      </div>
      <div className="w-[71.063rem] grid grid-cols-7  gap-[4px]">
        {days.map((day, index) => {
          const dayTransactions = day
            ? getTransactionsByDay(transactionsMock, day)
            : [];
          return (
            <DayCell
              key={index}
              day={day}
              selectedDate={selectedDate}
              onSelectDate={onSelectDate}
              transactions={dayTransactions}
            />
          );
        })}
      </div>
    </>
  );
};
