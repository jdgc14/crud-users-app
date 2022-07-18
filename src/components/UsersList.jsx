import React from 'react';
import '../App.css';

const UsersList = ({ users, readUser, deleteUser }) => {

    return (
        <div className='row'>
            {users?.map(user => (
                <div className='col-sm-12 col-md-6 col-lg-4' key={user.id}>
                    <div className='card-user zoom' >
                        <h4 className='text-capitalize'>{user.first_name} {user.last_name}</h4>
                        <div className='d-flex flex-wrap text-break' style={{ height: '2.5rem' }}>
                            <h6>{user.email}</h6>
                        </div>
                        <h6>{user.birthday}</h6>
                        <div className='text-center'>
                            <button className='btn btn-info mx-1' onClick={() => readUser(user)} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-pencil"></i></button>
                            <button className='btn btn-danger mx-1' onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersList;