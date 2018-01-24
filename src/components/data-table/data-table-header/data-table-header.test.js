import React from 'react';
import { shallow } from 'enzyme';
import DataTableHeader from './data-table-header';

describe('component DataTableHeader', () => {
    test('renders headers from columns', () => {
        const columns = [{ displayName: 'Column 1', key: '123' }];
        const wrapper = shallowRenderDataTableHeader({ columns });

        expect(wrapper).toMatchSnapshot();
    });

    test('renders empty header if no columns given', () => {
        const wrapper = shallowRenderDataTableHeader();

        expect(wrapper).toMatchSnapshot();
    });
});

/**
* Helper function for rendering DataTableHeader in tests without boilerplate required props
* @param {Object} [props={}] props for DataTableHeader
* @return {ShallowWrapper} enzyme wrapper for DataTableHeader 
*/
function shallowRenderDataTableHeader(props = {}) {
    const propsToUse = {
        columns: [],
        ...props,
    };

    return shallow(<DataTableHeader {...propsToUse} />);
}
