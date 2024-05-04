import React from 'react';
import { IoPerson } from 'react-icons/io5';
import UsersCreateEdit from './UsersCreateEdit';

const UsersCreate = () => {
    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <IoPerson className='me-1' />Users Create
            </h3>
            <UsersCreateEdit title={"Users Create"}></UsersCreateEdit>
        </div>
    );
};

export default UsersCreate;