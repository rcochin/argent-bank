import { useDispatch, useSelector } from 'react-redux';
import Account from '../../components/Account/Account';
import EditNames from '../../components/EditNames/EditNames';
import '../../responsive.css';
import { updateUserProfile } from '../../store/userSlice';
import './User.css';

function User() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch ();

    function handleSave ( newFirstName, newLastName) {
        const token = localStorage.getItem('authToken');
        dispatch ( updateUserProfile (token, newFirstName, newLastName ) );
    }

    function handleCancel () {
        console.log( "Cancelled" );
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                {user ? (
                    <>
                        <h1>Welcome back <br/>
                        <EditNames
                            firstName={user.firstName}
                            lastName={user.lastName}
                            onSave={handleSave}
                            onCancel={handleCancel}
                        />
                        </h1>
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