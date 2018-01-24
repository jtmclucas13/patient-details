import React, { Component } from 'react';
import PropTypes from 'prop-types';
import myData from '../../constants/patients.json';
import { patientListColumns } from '../../constants/patients';
import { DataTable } from '../../components';

export default class PatientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: myData,
        };
    }

    render() {
        const { patients } = this.state;
        return (
            <div>
                <h2>PatientList</h2>
                <DataTable
                    columns={patientListColumns}
                    data={patients}
                />
            </div>
        );
    }
}
