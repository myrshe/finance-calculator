import React from "react";
import { DayCell } from "./Day-cell.tsx";
import {
  getStartOfMonth,
  getDaysInMonth,
  getWeekday,
} from "../utils/date.ts";
import { MonthHeader } from "./Month-header.tsx";

type MonthViewProps = {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onChangeMonth: (date: Date) => void;
};

export const MonthView: React.FC<MonthViewProps> = ({currentDate, selectedDate, onSelectDate, onChangeMonth,}) => {

  const goToPrevMonth = () => {
    onChangeMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    onChangeMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

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

  while (days.length < 35) {
    days.push(null);
  }

  return (
    <div className="w-[75.5rem] h-[59.313rem] bg-surface-2 rounded-3xl p-[2.185rem]">
      <MonthHeader currentDate={currentDate} onPrevMonth={goToPrevMonth} onNextMonth={goToNextMonth}/>

      <div className="w-[71.063rem] grid grid-cols-7 grid-rows-5 gap-[4px] mt-[13px]">
        {days.map((day, index) => (
          <DayCell key={index} day={day} selectedDate={selectedDate} onSelectDate={onSelectDate}/>
        ))}
      </div>
    </div>
  );
};

