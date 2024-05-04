import React from 'react';
import PatientCreateEdit from './PatientCreateEdit';
import { MdSick } from 'react-icons/md';

const PatientsEdit = () => {
    return (
        <div>
            <h3 className='d-flex align-items-center mt-3'>
                <MdSick className='me-1' />Patients
            </h3>
            <PatientCreateEdit title={"Edit Patient"}></PatientCreateEdit>
        </div>
    );
};

export default PatientsEdit;