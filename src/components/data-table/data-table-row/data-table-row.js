import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './data-table-row.css';

function DataTableRow ({ cells, className, onClick }) {
    const _className = classNames('data-table-row', className);

    return (
        <tr className={_className} onClick={onClick}>
            {cells.map((cell, cellIndex) => (
                <td
                    key={cellIndex}
                    className='data-table-row__cell'
                    colSpan={cell.colSpan}
                >
                    {cell.value}
                </td>
            ))}
        </tr>
    );
}

DataTableRow.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.shape({
        colSpan: PropTypes.number,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })).isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default DataTableRow;
