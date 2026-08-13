const reverseString = require('../src/03_reverseString');

describe('reverseString', () => {
  test('should reverse array ["h","e","l","l","o"] in-place', () => {
    const s = ["h", "e", "l", "l", "o"];
    reverseString(s);
    expect(s).toEqual(["o", "l", "l", "e", "h"]);
  });

  test('should reverse array ["H","a","n","n","a","h"] in-place', () => {
    const s = ["H", "a", "n", "n", "a", "h"];
    reverseString(s);
    expect(s).toEqual(["h", "a", "n", "n", "a", "H"]);
  });

  test('should handle single character array', () => {
    const s = ["a"];
    reverseString(s);
    expect(s).toEqual(["a"]);
  });

  test('should handle empty array', () => {
    const s = [];
    reverseString(s);
    expect(s).toEqual([]);
  });

  test('should reverse array with numbers as strings', () => {
    const s = ["1", "2", "3", "4", "5"];
    reverseString(s);
    expect(s).toEqual(["5", "4", "3", "2", "1"]);
  });

  test('should reverse array with special characters', () => {
    const s = ["!", "@", "#", "$"];
    reverseString(s);
    expect(s).toEqual(["$", "#", "@", "!"]);
  });

  test('should reverse array with spaces', () => {
    const s = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
    reverseString(s);
    expect(s).toEqual(["d", "l", "r", "o", "w", " ", "o", "l", "l", "e", "h"]);
  });

  test('should reverse palindrome array', () => {
    const s = ["r", "a", "c", "e", "c", "a", "r"];
    reverseString(s);
    expect(s).toEqual(["r", "a", "c", "e", "c", "a", "r"]);
  });
});