import * as mathUtils from './math';

describe('util getMedian', () => {
    test('returns median value for an array of even length', () => {
        const values = [1, 3, 5, 7];

        const result = mathUtils.getMedian(values);

        expect(result).toEqual(4);
    });

    test('returns median value for an array of odd length', () => {
        const values = [1, 3, 5];

        const result = mathUtils.getMedian(values);

        expect(result).toEqual(3);
    });
});

describe('util getXDistance', () => {
    test('returns proportional distance from min to target', () => {
        const targetValue = 5;
        const min = 0;
        const max = 10;
        const width = 100;

        const result = mathUtils.getXDistance(targetValue, min, max, width);

        expect(result).toEqual(50);
    });
});
