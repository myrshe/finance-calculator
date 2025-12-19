import { getTransactionsByDay, transactionsMock } from "@/entities/transaction";

type Props = {
    selectedDate: Date | null;
};

export const ListTransactions: React.FC<Props> = ({selectedDate}) => {
    const transactions = getTransactionsByDay( transactionsMock, selectedDate);
    return (
      <div className="w-[19.375rem] h-[50rem] bg-surface-2 rounded-3xl flex flex-col items-center pt-7 gap-4">
        <div className="text-xl">
          {selectedDate ? (
            <p>Операции за {selectedDate.toLocaleDateString()}:</p>
          ) : (
            <p>Выберите день в календаре</p>
          )}
        </div>

        {transactions.length === 0 && selectedDate && (
          <p>Нет операций за этот день</p>
        )}

        {transactions.map((transaction) => (
          <div key={transaction.id} className={`w-[15.5rem] h-[5.125rem] rounded-xl p-3
          ${transaction.type === "income" ? "bg-income" : "bg-expense"}`}>
            <div className="flex gap-3">
              <p className="">{transaction.category}</p>
              <p>
              {transaction.type === "income" ? "+" : "-"}
              {transaction.amount}
            </p>
            </div>
            <p>
                {transaction.description}
            </p>
          </div>
        ))}
      </div>
    );
}