import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Routes } from '../../constants/routes';
import { getYearsBetweenDates } from '../../utils/date';
import { WhiskerPlot } from '../../components';
import './patient-details.css';

function PatientDetails ({ allWeights, dob, histology, mrn, name, sex, treatment_site, tumor_size_cm, weight }) {
    const age = getYearsBetweenDates(dob);

    return (
        <div className='patient-details'>
            <h2>Patient Details - {name.first} {name.last}</h2>
            <div className='patient-details__identifying-info'>
                <span>MRN: {mrn}</span>
                <span>{dob}</span>
                <span>{age} year old {sex}</span>
            </div>
            <div className='patient-details__tumor-info'>
                {tumor_size_cm}cm {histology}, {treatment_site}
            </div>
            <div className='patient-details__weight'>
                {weight} lbs
                {allWeights && <WhiskerPlot className='patient-details__weight-plot' allValues={allWeights} targetValue={weight} />}
            </div>
            <Link to={Routes.HOME}>
                <button className='patient-details__back'>Patient List</button>
            </Link>
        </div>
    );
}

PatientDetails.propTypes = {
    allWeights: PropTypes.arrayOf(PropTypes.number),
    dob: PropTypes.string.isRequired,
    histology: PropTypes.string,
    mrn: PropTypes.string,
    name: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
    }).isRequired,
    sex: PropTypes.string,
    treatment_site: PropTypes.string,
    tumor_size_cm: PropTypes.number,
    weight: PropTypes.number,
};

export default PatientDetails;