import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getMedian, getXDistance } from '../../utils/math';

function WhiskerPlot ({ allValues, className, targetValue, width }) {
    const _className = classNames('whisker-plot', className);

    allValues.sort((a, b) => a - b);

    const min = allValues[0];
    const max = allValues[allValues.length - 1];
    const median = getMedian(allValues);

    const medianX = getXDistance(median, min, max, width);
    const targetX = getXDistance(targetValue, min, max, width);

    return (
        <svg className={_className} height={20} width={width}>
            <line x1={0} x2={width} y1={10} y2={10} strokeWidth={2} stroke='black' />
            <line x1={1} x2={1} y1={0} y2={20} strokeWidth={2} stroke='black' />
            <line x1={width - 1} x2={width - 1} y1={0} y2={20} strokeWidth={2} stroke='black' />
            <line x1={medianX} x2={medianX} y1={0} y2={20} strokeWidth={2} stroke='black' />
            <circle cx={targetX} cy={10} r={10} />
        </svg>
    );
}

WhiskerPlot.propTypes = {
    allValues: PropTypes.arrayOf(PropTypes.number).isRequired,
    className: PropTypes.string,
    targetValue: PropTypes.number.isRequired,
    width: PropTypes.number,
};

WhiskerPlot.defaultProps = {
    width: 200,
};

export default WhiskerPlot;