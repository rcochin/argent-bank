import Account from '../../components/Account/Account';
import Transactions from '../../components/Transactions/Transactions';
import './TransactionsPage.css';

function TransactionsPage () { 

    const transactionsTable = [
        {
          date: 'June 20th, 2020',
          description: 'Golden Sun Bakery',
          amount: '$5.00',
          balance: '$2082.79'
        },
        {
          date: 'June 20th, 2020',
          description: 'Golden Sun Bakery',
          amount: '$10.00',
          balance: '$2087.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$20.00',
            balance: '$2097.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$30.00',
            balance: '$2117.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$40.00',
            balance: '$2147.79'
        },
        {
            date: 'June 20th, 2020',
            description: 'Golden Sun Bakery',
            amount: '$50.00',
            balance: '$2187.79'
        }
    ];

    return (
        <main className='bg-dark transactions'>
            <Account 
                type={"Argent Bank Checking (x8349)"} 
                balance={"$2,082.79"}
                description={"Available Balance"}
            />
            <table>
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>
                    <th>BALANCE</th>
                </tr>
            </thead>
            <tbody>
                {transactionsTable.map((transaction, index) => (
                    <Transactions
                        key={index}
                        date={transaction.date}
                        description={transaction.description}
                        amount={transaction.amount}
                        balance={transaction.balance}
                    />
                ))}
            </tbody>
        </table>
        </main>
    )
}

export default TransactionsPage;