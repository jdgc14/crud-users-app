import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ userData, createUser, updateUser }) => {

    const { register, handleSubmit, reset } = useForm();

    const defaultValues = { email: '', password: '', first_name: '', last_name: '', birthday: '' }

    useEffect(() => {

        if (userData) {
            defaultValues.email = userData.email
            defaultValues.password = userData.password
            defaultValues.first_name = userData.first_name
            defaultValues.last_name = userData.last_name
            defaultValues.birthday = userData.birthday

        }
        reset(defaultValues)
    }, [userData])


    const submit = data => {
        if (userData !== null) {
            updateUser(data, userData.id)
            reset(defaultValues)
        } else {
            createUser(data)
            reset(defaultValues)
        }
    }


    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Crud Users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(submit)} className='text-center'>
                                <div>
                                    <label htmlFor='email-input'>Email</label>
                                    <input type='email' id='email-input' {...register("email")} />
                                </div>
                                <div>
                                    <label htmlFor='password-input'>Password</label>
                                    <input type='password' id='password-input' {...register("password")} />
                                </div>
                                <div>
                                    <label htmlFor="first-name-input">First Name</label>
                                    <input type="text" id="first-name-input" {...register("first_name")} />
                                </div>
                                <div>
                                    <label htmlFor="last-name-input">Last Name</label>
                                    <input type="text" id="last-name-input" {...register("last_name")} />
                                </div>
                                <div>
                                    <label htmlFor="birthday-input">Birthday</label>
                                    <input type="date" id="birthday-input" {...register("birthday")} />
                                </div>
                                <div className="modal-footer my-2">
                                    <button type="button" className="btn btn-primary" onClick={() => reset(defaultValues)}>Clear</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default UsersForm;