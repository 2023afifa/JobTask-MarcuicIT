import React from 'react';
import PatientCreateEdit from './PatientCreateEdit';
import { MdSick } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { records as data } from "./Patientsdata";

const PatientsEdit = () => {

    const { id } = useParams();
    const contractData = data.find(item => item.id === parseInt(id) + 1);

    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <MdSick className='me-1' />Patients
            </h3>
            <PatientCreateEdit title={"Edit Patient"} data={contractData}></PatientCreateEdit>
        </div>
    );
};

export default PatientsEdit;