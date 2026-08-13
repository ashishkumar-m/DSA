/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}

If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
/**********************/

/**********************/
/*
Solution:

- A pointer 'k' that holds the place where the next possible replcement could happen
- Set k=0 and Loop through the array from 1st element as we know 
- Check if the num at kth position is equal to the num at the current position
    - If 'yes', we do nothing because the value has not changed
    - If 'no',  we increment the position of k where we replace the value of the nums[k] with the current value;

*/
/**********************/
function removeDuplicates(nums){
    if(nums.length <= 1) return nums.length;
    let k = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] !== nums[k]){
            k++;
            nums[k] = nums[i];
        }
    }
    return k+1;
}

module.exports = removeDuplicates;
