import React from 'react';
import { shallow } from 'enzyme';
import { Routes } from '../../constants/routes';
import PatientList from './patient-list';

describe('component PatientList', () => {
    test('renders component', () => {
        const wrapper = shallow(<PatientList />);

        expect(wrapper).toMatchSnapshot();
    });

    test('handleRowClick pushes new value to history', () => {
        const history = { push: jest.fn() };
        const mrn = '1234';
        const patients = [{ mrn }];
        const rowIndex = 0;
        const props = { history, patients };
        const newHistoryString = `${Routes.PATIENT_DETAILS}/${mrn}`;

        const wrapper = shallow(<PatientList {...props} />);
        wrapper.instance().handleRowClick(null, rowIndex);

        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenLastCalledWith(newHistoryString);
    });
});
