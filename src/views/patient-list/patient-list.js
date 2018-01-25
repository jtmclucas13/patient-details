import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Routes } from '../../constants/routes';
import { patientListColumns } from '../../constants/patients';
import { DataTable } from '../../components';
import './patient-list.css';

export default class PatientList extends Component {
    static propTypes = {
        history: PropTypes.object,
        patients: PropTypes.arrayOf(PropTypes.shape({
            dob: PropTypes.string,
            histology: PropTypes.string,
            mrn: PropTypes.string,
            name: PropTypes.shape({
                first: PropTypes.string,
                last: PropTypes.string,
            }),
            sex: PropTypes.string,
            treatment_site: PropTypes.string,
            tumor_size_cm: PropTypes.number,
            weight: PropTypes.number,
        })),
    };

    handleRowClick = (e, rowIndex) => {
        const { history, patients } = this.props;
        
        const targetPatient = patients[rowIndex];
        const { mrn } = targetPatient;

        history.push(`${Routes.PATIENT_DETAILS}/${mrn}`);
    }

    render() {
        const { patients } = this.props;
        return (
            <div className='patient-list'>
                <h2>Patient Directory</h2>
                <DataTable
                    columns={patientListColumns}
                    data={patients}
                    onRowClick={this.handleRowClick}
                />
            </div>
        );
    }
}
