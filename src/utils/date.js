/**
 * Creates a date from a string of format mm/dd/yyyy
 * @param  {String} formattedString - must be mm/dd/yyyy
 * @return {Date}
 */
export function createDateFromString(formattedString) {
    const dateParts = formattedString.split('/');
    const year = parseInt(dateParts[2], 10);
    const month = parseInt(dateParts[0], 10) - 1;
    const day = parseInt(dateParts[1], 10);
    
    return new Date(year, month, day);
}

/**
 * Returns the years between a date string of mm/dd/yyyy format and a provided date
 * @param  {String} initialDate - must be mm/dd/yyy format
 * @param {Date} [new Date()] comparisonDate - "present" date used to calculate difference against 
 * @return {Number} yearDifference - In UTC
 */
export function getYearsBetweenDates(initialDate, comparisonDate = new Date()) {
    const dobDate = createDateFromString(initialDate);

    let yearDifference = comparisonDate.getUTCFullYear() - dobDate.getUTCFullYear();
    const monthDifference = comparisonDate.getUTCMonth() - dobDate.getUTCMonth();
    const dayDifference = comparisonDate.getUTCDate() - dobDate.getUTCDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        yearDifference = yearDifference - 1;
    }

    return yearDifference;
}
