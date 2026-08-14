const bestTimeToBuy = require('../src/04_bestTimeToBuy');

describe('bestTimeToBuy', () => {
    test('should return maximum profit with normal price array', () => {
        expect(bestTimeToBuy([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    test('should return 0 when prices only decrease', () => {
        expect(bestTimeToBuy([7, 6, 4, 3, 1])).toBe(0);
    });

    test('should return 0 with single element', () => {
        expect(bestTimeToBuy([5])).toBe(0);
    });

    test('should return profit with two elements', () => {
        expect(bestTimeToBuy([2, 4])).toBe(2);
    });

    test('should return 0 when all prices are the same', () => {
        expect(bestTimeToBuy([3, 3, 3, 3])).toBe(0);
    });

    test('should return correct profit when best prices are at start and end', () => {
        expect(bestTimeToBuy([1, 2, 3, 4, 5])).toBe(4);
    });

    test('should return 0 with empty array', () => {
        expect(bestTimeToBuy([])).toBe(0);
    });

    test('should handle large price difference', () => {
        expect(bestTimeToBuy([1, 100, 50])).toBe(99);
    });
});