import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import myData from './constants/patients.json';
import { Routes } from './constants/routes';
import { AppHeader } from './components';
import { PatientDetails, PatientList } from './views';

function getPatient(mrn) {
    return myData.find(patient => patient.mrn === mrn);
}

function getAllWeights(patients) {
    return patients.map(patient => patient.weight);
}

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className='app'>
                <AppHeader />
                <Route exact path={Routes.HOME} render={({ history }) => <PatientList history={history} patients={myData} />} />
                <Route
                    path={`${Routes.PATIENT_DETAILS}/:patientId`}
                    render={({ match }) => <PatientDetails {...getPatient(match.params.patientId)} allWeights={getAllWeights(myData)} />}
                />
            </div>
        </BrowserRouter>
    );
  }
}
