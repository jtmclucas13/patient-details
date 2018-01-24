import React from 'react';
import { shallow } from 'enzyme';
import PatientDetails from './patient-details';

describe('component PatientDetails', () => {
    test('renders as expected without whisker plot', () => {
        const wrapper = renderPatientDetails();

        expect(wrapper).toMatchSnapshot();
    });

    test('renders with whisker plot', () => {
        const allWeights = [];
        const weight = 123;

        const wrapper = renderPatientDetails({ allWeights, weight });

        expect(wrapper).toMatchSnapshot();
    });
});

/**
* Helper function for rendering PatientDetails in tests without boilerplate required props
* @param {Object} [props={}] props for PatientDetails
* @return {ShallowWrapper} enzyme wrapper for PatientDetails 
*/
function renderPatientDetails(props = {}) {
    const propsToUse = {
        dob: '1/1/2018',
        name: {},
        ...props,
    };

    return shallow(<PatientDetails {...propsToUse} />);
}
