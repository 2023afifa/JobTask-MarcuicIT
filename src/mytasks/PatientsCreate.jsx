import React from 'react';
import { MdSick } from 'react-icons/md';
import PatientCreateEdit from './PatientCreateEdit';

const PatientsCreate = () => {
    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <MdSick className='me-1' />Patients
            </h3>
            <PatientCreateEdit title={"Create Patient"}></PatientCreateEdit>
        </div>
    );
};

export default PatientsCreate;