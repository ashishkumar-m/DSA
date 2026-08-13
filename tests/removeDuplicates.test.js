const removeDuplicates = require('../src/01_removeDuplicates');

describe('removeDuplicates', () => {
  test('should return 2 and modify array [1,1,2] to [1,2,_]', () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  test('should return 5 for array [0,0,1,1,1,2,2,3,3,4]', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should return 0 for empty array', () => {
    const nums = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
  });

  test('should return 1 for single element array', () => {
    const nums = [1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  test('should return 4 for array with no duplicates', () => {
    const nums = [1, 2, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(4);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
  });

  test('should return 1 for array with all duplicates', () => {
    const nums = [5, 5, 5, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([5]);
  });
});