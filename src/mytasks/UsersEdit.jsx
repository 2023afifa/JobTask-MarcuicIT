import React from 'react';
import { IoPerson } from 'react-icons/io5';
import UsersCreateEdit from './UsersCreateEdit';
import { useParams } from 'react-router-dom';
import { records as data } from "./Usersdata";

const UsersEdit = () => {
    const { id } = useParams();
    const contractData = data.find(item => item.id === parseInt(id) + 1);

    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <IoPerson className='me-1' />Users Edit
            </h3>
            <UsersCreateEdit title={"Users Edit"} data={contractData}></UsersCreateEdit>
        </div>
    );
};

export default UsersEdit;