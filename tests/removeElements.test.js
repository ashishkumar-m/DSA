const removeElement = require('../src/02_removeElement');

describe('removeElement', () => {
  test('should return 2 and modify array [3,2,2,3] with val=3 to [2,2,_,_]', () => {
    const nums = [3, 2, 2, 3];
    const k = removeElement(nums, 3);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 2]);
  });

  test('should return 5 for array [0,1,2,2,3,0,4,2] with val=2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const k = removeElement(nums, 2);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 3, 0, 4]);
  });

  test('should return 0 for array with all elements equal to val', () => {
    const nums = [5, 5, 5, 5];
    const k = removeElement(nums, 5);
    expect(k).toBe(0);
  });

  test('should return array length when val is not in array', () => {
    const nums = [1, 2, 3, 4];
    const k = removeElement(nums, 5);
    expect(k).toBe(4);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
  });

  test('should return 0 for empty array', () => {
    const nums = [];
    const k = removeElement(nums, 1);
    expect(k).toBe(0);
  });

  test('should return 1 for single element array not matching val', () => {
    const nums = [1];
    const k = removeElement(nums, 2);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  test('should return 0 for single element array matching val', () => {
    const nums = [1];
    const k = removeElement(nums, 1);
    expect(k).toBe(0);
  });
});