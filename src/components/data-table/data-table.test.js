import React from 'react';
import { mount, shallow } from 'enzyme';
import DataTable from './data-table';

describe('component DataTable', () => {
    test('renders empty table if no columns and empty data provided', () => {
        const data = [];
        const wrapper = renderDataTable({ data });

        expect(wrapper).toMatchSnapshot();
    });

    test('renders table with proper headers and data', () => {
        const columns = [{ accessor: (data) => data.data, displayName: 'Column 1', key: '123' }];
        const data = [{ data: 'Value' }];

        const wrapper = renderDataTable({ columns, data });

        expect(wrapper).toMatchSnapshot();
    });

    test('renders not found option if no data provided', () => {
        const columns = [{ accessor: (data) => data.data, displayName: 'Column 1', key: '123' }];
        const dataNotFoundMessage = 'Data not found.';

        const wrapper = renderDataTable({ columns }, true);
        const row = wrapper.find('DataTableRow');
        const cellText = row.text();

        expect(cellText).toEqual(dataNotFoundMessage);
    });

    test('applies special class for odd-numbered rows', () => {
        const columns = [{ accessor: (data) => data.data, displayName: 'Column 1', key: '123' }];
        const data = [
            { data: 'Value' },
            { data: 'Other Value' },
        ];
        const numberOfOddRows = data.length / 2;

        const wrapper = renderDataTable({ columns, data });
        const oddRows = wrapper.find('.data-table__row--odd');

        expect(oddRows.length).toEqual(numberOfOddRows);
    });

    test('builds rows from column properties', () => {
        const value = 'Value';
        const columns = [{ accessor: (data) => data.data, displayName: 'Column 1', key: '123' }];
        const data = [{ data: value }];
        const expectedRowText = value;

        const wrapper = renderDataTable({ columns, data });
        const row = wrapper.find('DataTableRow');
        const rowProps = row.props();
        const { cells } = rowProps;
        const cellValue = cells[0].value;

        expect(cellValue).toEqual(expectedRowText);
    });

    test('renders empty cells when data for column is not found', () => {
        const columns = [{ accessor: (data) => data.data, displayName: 'Column 1', key: '123' }];
        const data = [{}];

        const wrapper = renderDataTable({ columns, data });
        const cell = wrapper.find('.data-table__cell');
        const cellChildNodes = cell.children();

        expect(cellChildNodes.length).toEqual(0);
    });
});

/**
* Helper function for rendering DataTable in tests without boilerplate required props
* @param {Object} [props={}] props for DataTable
* @return {ShallowWrapper} enzyme wrapper for DataTable 
*/
function renderDataTable(props = {}, shouldMount = false) {
    const propsToUse = {
        columns: [],
        ...props,
    };

    if (shouldMount) {
        return mount(<DataTable {...propsToUse} />);
    }

    return shallow(<DataTable {...propsToUse} />);
}
