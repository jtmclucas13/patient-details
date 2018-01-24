import React from 'react';
import { shallow } from 'enzyme';
import DataTableRow from './data-table-row';

describe('component DataTableRow', () => {
    test('renders cells', () => {
        const cells = [{ value: '123' }];
        const wrapper = shallowRenderDataTableRow();

        expect(wrapper).toMatchSnapshot();
    });

    test('renders empty row if no cells given', () => {
        const wrapper = shallowRenderDataTableRow();

        expect(wrapper).toMatchSnapshot();
    });
});

/**
* Helper function for rendering DataTableRow in tests without boilerplate required props
* @param {Object} [props={}] props for DataTableRow
* @return {ShallowWrapper} enzyme wrapper for DataTableRow
*/
function shallowRenderDataTableRow(props = {}) {
    const propsToUse = {
        cells: [],
        ...props,
    };

    return shallow(<DataTableRow {...propsToUse} />);
}