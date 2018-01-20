import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableHeader from './data-table-header/data-table-header';
import DataTableRow from './data-table-row/data-table-row';
import './data-table.css';

function DataTable ({ className, columns, data }) {
    const _className = classNames('data-table', className);

    return (
        <table className={_className}>
            <DataTableHeader columns={columns} />
            <tbody className='data-table__body'>
                {data ? 
                    data.map((rowData, rowIndex) => {
                        const cells = columns.map(column => {
                            const value = column.accessor(rowData) || null;
                            return {
                                colSpan: rowData.colSpan,
                                value,
                            };
                        });
                        const isOddRow = rowIndex % 2;
                        return (
                            <DataTableRow
                                cells={cells}
                                className={isOddRow ? 'data-table__row--odd' : null}
                                key={rowIndex}
                            />
                        );
                    }) :
                    <DataTableRow cells={[{ colSpan: columns.length, value: 'Data not found.' }]} />
                }
            </tbody>
        </table>
    );
}

DataTable.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
        accessor: PropTypes.func.isRequired,
        displayName: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    })).isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
};

export default DataTable;
