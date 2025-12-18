import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Textarea } from "@/shared/ui/textarea";

type Props = {
  selectedDate: Date | null;
};

export const AddTransactionForm: React.FC<Props> = ({ selectedDate }) => {
  return (
    <Card className="w-[16.15vw] h-[33rem] rounded-3xl bg-surface-1 p-4 flex items-center justify-center">
      <div className="w-[14.79vw] rounded-3xl bg-surface-4 py-2.5 px-[1.3125rem] flex flex-col items-start justify-center gap-6">
        <CardHeader className="w-full px-0">
          <CardTitle className="text-2xl font-normal">
            Добавить транзакцию
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-6 w-full px-0">
          <Input
            placeholder="Сумма"
            type="number"
            className="bg-input w-full rounded-3xl h-9 px-5 text-xl"
          ></Input>

          <RadioGroup className="w-full flex justify-between">
            <div className="flex flex-row items-center gap-2">
              <RadioGroupItem
                value="income"
                id="income"
                className="bg-input cursor-pointer"
              ></RadioGroupItem>
              <Label htmlFor="income" className="text-xl font-normal">
                Доход
              </Label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <RadioGroupItem
                value="expense"
                id="expense"
                className="bg-input cursor-pointer"
              ></RadioGroupItem>
              <Label htmlFor="expense" className="text-xl font-normal">
                Расход
              </Label>
            </div>
          </RadioGroup>

          <Select>
            <SelectTrigger className="bg-input rounded-3xl h-9 text-xl">
              <SelectValue placeholder="Категория"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Категория</SelectLabel>
                <SelectItem value="Еда">Еда</SelectItem>
                <SelectItem value="Транспорт">Транспорт</SelectItem>
                <SelectItem value="Развлечения">Развлечения</SelectItem>
                <SelectItem value="Другое">Другое</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="text-xl">
            {selectedDate ? (
              <p>Дата: {selectedDate.toLocaleDateString()}</p>
            ) : (
              <p>Выберите день в календаре</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-xl font-normal">Комментарий</Label>
            <Textarea
              placeholder="Например: кофе на прогулке"
              className="bg-input rounded-xl h-20 text-base"
            ></Textarea>
          </div>

          <Button className="w-full rounded-2xl h-11 text-2xl font-normal cursor-pointer">
            Добавить
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};
