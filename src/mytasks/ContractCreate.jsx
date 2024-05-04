import React from 'react';
import { FaFileContract } from 'react-icons/fa';
import CreateEditForm from './CreateEditForm';


const ContractCreate = () => {

    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <FaFileContract className='me-1' />Contracts
            </h3>
            <CreateEditForm title={"Create Contract"}></CreateEditForm>
        </div>
    );
};

export default ContractCreate;