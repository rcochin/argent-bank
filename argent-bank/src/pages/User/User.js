import './User.css';
import Account from '../../components/Account/Account';
import '../../responsive.css'
import { useSelector } from 'react-redux';

function User() {
    const user = useSelector((state) => state.user.user);

    return (
        <main className="main bg-dark">
            <div className="header">
                {user ? (
                    <>
                        <h1>Welcome back<br />{user.firstName + " " + user.lastName}</h1>
                        <button className="edit-button">Edit Name</button>
                    </>
                ) : (
                    <h1>Welcome back</h1>
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                type={"Argent Bank Checking (x8349)"}
                balance={"$2,082.79"}
                description={"Available Balance"}
            />
            <Account
                type={"Argent Bank Savings (x6712)"}
                balance={"$10,928.42"}
                description={"Available Balance"}
            />
            <Account
                type={"Argent Bank Credit Card (x8349)"}
                balance={"$184.30"}
                description={"Current Balance"}
            />
        </main>
    )
}

export default User;