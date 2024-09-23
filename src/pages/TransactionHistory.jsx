import { TransactionTable } from "../features/transactionHistory/TransactionTable";
import Heading from "../ui/Heading";

const TransactionHistory = () => {
  return (
    <div className="space-y-4">
      <Heading>Credits Purchase History</Heading>
      <TransactionTable />
    </div>
  );
};

export default TransactionHistory;
