import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsersForm from './UsersForm';
import UsersList from './UsersList';

const Home = () => {

    const url = 'https://users-crud1.herokuapp.com/users/'

    const [userData, setUserData] = useState(null);

    const [users, setUsers] = useState([])

    const readUsers = () => {
        axios.get(url)
            .then(res => setUsers(res.data))
    }

    const createUser = (data) => {
        axios.post(url, data)
            .then(res => readUsers())
    }

    const readUser = (userData) => {
        setUserData(userData)
    }

    const updateUser = (data, id) => {
        axios.put(url + `${id}/`, data)
            .then(res => readUsers())
    }

    const deleteUser = (id) => {
        axios.delete(url + `${id}/`)
            .then(res => readUsers(''))
    }

    useEffect(() => {
        readUsers(url)
    }, [])

    return (
        <div className='bg-home py-5' style={{ minHeight: '100vh' }}>
            <h1>CRUD Users</h1>
            <button type="button" className="btn btn-primary my-5 position-fixed" style={{top:'0', right:'25px'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create User
            </button>
            <div className="container">
                <UsersList
                    users={users}
                    readUser={readUser}
                    deleteUser={deleteUser}
                />
            </div>
            <div className="container">
                <UsersForm
                    userData={userData}
                    createUser={createUser}
                    updateUser={updateUser}
                />
            </div>
        </div>
    );
};

export default Home;