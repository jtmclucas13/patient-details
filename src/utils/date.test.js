import * as dateUtils from './date';

describe('util createDateFromString', () => {
    test('creates expected date given properly formatted string', () => {
        const dateString = '1/2/2018';

        const date = dateUtils.createDateFromString(dateString);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDay();

        expect(year).toEqual(2018);
        expect(month).toEqual(0);
        expect(day).toEqual(2);
        expect(date instanceof Date).toBe(true);
    });
});

describe('util getYearsBetweenDates', () => {
    test('returns years without taking date into account', () => {
        const dateString = '1/1/2018';
        const comparisonDate = new Date(Date.UTC(2028, 0, 1));

        const difference = dateUtils.getYearsBetweenDates(dateString, comparisonDate);

        expect(difference).toEqual(10);
    });

    test('returns years with taking date into account', () => {
        const dateString = '2/1/2018';
        const comparisonDate = new Date(Date.UTC(2028, 0, 1));

        const difference = dateUtils.getYearsBetweenDates(dateString, comparisonDate);

        expect(difference).toEqual(9);
    });
});
