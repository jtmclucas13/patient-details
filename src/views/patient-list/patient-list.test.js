import React from 'react';
import { shallow } from 'enzyme';
import PatientList from './patient-list';

describe('component PatientList', () => {
    test('renders component', () => {
        const wrapper = renderPatientList();

        expect(wrapper).toMatchSnapshot();
    });
});

function renderPatientList(props = {}) {
    return shallow(<PatientList { ...props } />);
}
