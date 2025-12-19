import { Button } from "@/shared/ui/button";
import ArrowLeftIcon from "@/shared/assets/icons/arrowLeft.svg?react";
import ArrowRightIcon from "@/shared/assets/icons/arrowRight.svg?react";

type Props = {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

export const MonthHeader: React.FC<Props> = ({currentDate, onPrevMonth, onNextMonth,}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 bg-primary rounded-4xl">
        <Button onClick={onPrevMonth} className="rounded-4xl cursor-pointer">
          <ArrowLeftIcon />
        </Button>

        <span className="first:capitalize text-xl">
          {currentDate.toLocaleString("ru-RU", {
            month: "long",
            year: "numeric",
          })}
        </span>

        <Button onClick={onNextMonth} className="rounded-4xl cursor-pointer">
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};
