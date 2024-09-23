import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "../../ui/CheckBox";

export const TransactionTable = () => {
  const dummyData = [
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 1200,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 2400,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 120,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 4000,
      amount: "$500",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 350,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 600,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 1200,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 2400,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 120,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 4000,
      amount: "$500",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 350,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 600,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 1200,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 2400,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 120,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 4000,
      amount: "$500",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 350,
      amount: "$240",
    },
    {
      invoice: "INV-01-09072010",
      status: "Completed",
      credits: 600,
      amount: "$240",
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow h-[75vh] overflow-y-scroll">
      <table className="w-full">
        <thead>
          <tr className="border-b font-bold">
            <th className="px-6 py-3 text-left">
              <Checkbox />
            </th>
            <th className="px-6 py-3 text-left">Invoice</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Credits</th>
            <th className="px-6 py-3 text-left">Amount</th>
            <th className="px-6 py-3 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((row, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="px-6 py-4">
                <Checkbox />
              </td>
              <td className="px-6 py-4">{row.invoice}</td>
              <td className="px-6 py-4 flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-green-400">
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4">{row.credits}</td>
              <td className="px-6 py-4">{row.amount}</td>
              <td className="px-6 py-4">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
