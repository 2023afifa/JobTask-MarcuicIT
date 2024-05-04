import React from 'react';
import { FaFileContract } from "react-icons/fa";
import CreateEditForm from './CreateEditForm';
import { useParams } from 'react-router-dom';
import { records as data } from "./Contractsdata";


const ContractsEdit = () => {
    const { id } = useParams();
    const contractData = data.find(item => item.id === parseInt(id) + 1);

    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <FaFileContract className='me-1' />Contracts
            </h3>
            <CreateEditForm title={"Edit Contract"} data={contractData}></CreateEditForm>
        </div>
    );
};

export default ContractsEdit;