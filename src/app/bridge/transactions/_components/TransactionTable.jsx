export default function TransactionTable() {
  return (
    <table class="table-auto">
      <thead>
        <tr className="bg-ash">
          <th className="text-start font-semibold pl-6 py-2 uppercase">Token</th>
          <th className="text-start font-semibold py-2 uppercase">Amount</th>
          <th className="text-start font-semibold py-2 uppercase">Account</th>
          <th className="text-start font-semibold py-2 uppercase">Status</th>
          <th className="text-start font-semibold py-2 uppercase">Type</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-ash">
          <td className="py-3 pl-6">$LNBG</td>
          <td className="py-3">0.0001</td>
          <td className="py-3">0x1234...7890</td>
          <td className="py-3">Completed</td>
          <td className="py-3">Mint</td>
        </tr>
        <tr className="border-b border-ash">
          <td className="py-3 pl-6">$LNBG</td>
          <td className="py-3">0.0001</td>
          <td className="py-3">0x1234...7890</td>
          <td className="py-3">Pending</td>
          <td className="py-3">Burn</td>
        </tr>
        <tr className="border-b border-ash">
          <td className="py-3 pl-6">$LNBG</td>
          <td className="py-3">0.0001</td>
          <td className="py-3">0x1234...7890</td>
          <td className="py-3">Completed</td>
          <td className="py-3">Mint</td>
        </tr>
      </tbody>
    </table>
  );
}
