import React from 'react';
import { IoPerson } from 'react-icons/io5';
import UsersCreateEdit from './UsersCreateEdit';

const UsersEdit = () => {
    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <IoPerson className='me-1' />Users Edit
            </h3>
            <UsersCreateEdit title={"Users Edit"}></UsersCreateEdit>
        </div>
    );
};

export default UsersEdit;