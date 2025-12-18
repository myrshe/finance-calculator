import { AddTransactionForm } from "@/features/add-transaction/ui/AddTransactionForm";
import { MonthView } from "@/features/calendar/ui/Months-view";
import { useState } from "react";



export const CalendarPage = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  
  return (
    <main className="mt-[6.5rem] px-[1.563rem] flex items-start gap-[1.25rem]">
      <AddTransactionForm selectedDate={selectedDate} />

      <MonthView
        currentDate={currentDate}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        onChangeMonth={setCurrentDate}
      />

      <div className="w-[19.375rem] h-[50rem] bg-surface-2"></div>
    </main>
  );
};
