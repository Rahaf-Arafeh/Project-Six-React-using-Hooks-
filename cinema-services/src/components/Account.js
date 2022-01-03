import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UseContext } from '../App';
import '../styles/Account.css'
function Account() {
    const history = useHistory();
    const { setIsLogged } = useContext(UseContext);
    const [user, setUser] = useState({});
    useEffect(() => {
        let isLoggedIn = JSON.parse(localStorage.getItem("isLogged"));
        if (!isLoggedIn) {
            history.push('/cinemaservices')
        } let user = JSON.parse(localStorage.getItem("loggedAccount"));
        setUser(user);
    }, []);
    const handelUserName = (e) => {
        let newUserName = user;
        newUserName.username = e.target.value;
        setUser({ ...newUserName });
    };
    const handelPassword = (e) => {
        let newPassword = user;
        newPassword.password = e.target.value;
        setUser({ ...newPassword });
    };
    const updateUser = (e) => {
        e.preventDefault();
        localStorage.setItem("loggedAccount", JSON.stringify(user));
        let users = JSON.parse(localStorage.getItem("user"));
        users.map((e) => {
            if (e.email == user.email) {
                e.password = user.password;
                e.username = user.username;
            }
        })
        localStorage.setItem("user", JSON.stringify(users));
    };
    const logOut = () => {
        localStorage.setItem("isLogged", false);
        localStorage.setItem("loggedAccount", "");
        setIsLogged(false);
        history.push('/');
    };
    return (
        <div>
            <div className='form-container-Account'>
                <div className='form-wrap-Account'>
                    <h1>Account Details</h1>
                    <form>
                        <div className='form-group-Account'>
                            <label htmlFor='username'>User name:</label>
                            <input type='text' name='username' id='username'
                                value={user.username} onChange={handelUserName} />
                        </div>
                        <div className='form-group-Account'>
                            <label htmlFor='email'>Email:</label>
                            <input type='email' name='email' id='email'
                                value={user.email} disabled />
                        </div>
                        <div className='form-group-Account'>
                            <label htmlFor='password'>Password:</label>
                            <input type='password' name='password' id='password' value={user.password}
                                onChange={handelPassword} />
                        </div>
                        <button type='submit' onClick={updateUser} className='edit-button'>Edit</button>
                        <button onClick={logOut} className='logout-button'>Logout</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account
