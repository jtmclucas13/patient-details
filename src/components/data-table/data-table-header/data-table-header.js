import React from 'react';
import PropTypes from 'prop-types';
import './data-table-header.css';

function DataTableHeader ({ columns }) {
    return (
        <thead className='data-table-header'>
            <tr>
                {columns.map(column => (
                    <th className='data-table-header__cell' key={column.key}>{column.displayName}</th>
                ))}
            </tr>
        </thead>
    );
}

DataTableHeader.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
    })).isRequired,
};

export default DataTableHeader;
