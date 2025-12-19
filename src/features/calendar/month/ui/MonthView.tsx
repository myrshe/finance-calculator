import React from "react";
import { DayCell } from "./DayCell.tsx";
import { getStartOfMonth, getDaysInMonth, getWeekday } from "../utils/date.ts";
import { transactionsMock } from "@/entities/transaction";
type ViewMode = "month" | "week";

type MonthViewProps = {
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

export const MonthView: React.FC<MonthViewProps> = ({
  currentDate,
  selectedDate,
  onSelectDate,
}) => {

  const startOfMonth = getStartOfMonth(currentDate);
  const daysInMonth = getDaysInMonth(currentDate);
  const startWeekday = getWeekday(startOfMonth);

  const days: (Date | null)[] = [];

  for (let i = 0; i < startWeekday; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  }

  while (days.length < 42) {
    days.push(null);
  }

  return (
    <>
      <div className="grid grid-cols-7 gap-[4px] ">
        {WeekDays.map((day) => (
          <p
            key={day}
            className="flex justify-center items-center  mt-[13px] text-lg">
            {day}
          </p>
        ))}
      </div>
      <div className="w-[71.063rem] grid grid-cols-7 grid-rows-6 gap-[4px]">
        {days.map((day, index) => (
          <DayCell
            key={index}
            day={day}
            selectedDate={selectedDate}
            onSelectDate={onSelectDate}
            transactions={transactionsMock}
          />
        ))}
      </div>
    </>
  );
};
