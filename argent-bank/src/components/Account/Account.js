import './Account.css';
import { Link } from 'react-router-dom';

function Account ({type, balance, description}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{type}</h3>
                <p className="account-amount">{balance}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <Link to="/transactions" className='transaction-button'>View transactions</Link>
            </div>
        </section>
    )
}

export default Account;