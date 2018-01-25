/**
 * Get median value from a sorted array
 * @param  {Number[]} sortedValues - sorted array of numbers
 * @return {Number} median
 */
export function getMedian(sortedValues){
    const middle = Math.floor(sortedValues.length / 2);

    let median;
    if (sortedValues.length % 2) {
        median = sortedValues[middle];
    } else {
        median = (sortedValues[middle - 1] + sortedValues[middle]) / 2;
    }

    return median;
}

/**
 * Get the x distance for a point along a line of given width
 * @param  {Number} targetValue - value of the point to plot
 * @param  {Number} min         - minimum value of data set
 * @param  {Number} max         - maximum value of data set
 * @param  {Number} width       - total width of the line
 * @return {Number}             - intended x distance along the line
 */
export function getXDistance(targetValue, min, max, width) {
    const range = max - min;
    const absoluteDistance = targetValue - min;
    const percentageDistance = absoluteDistance / range;
    return percentageDistance * width;
}
