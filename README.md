# Learn DSA from NamasteDSA

## Description
This is a project in JavaScript primarily to learn Data Structures and Algorithms to come up with more intuitive and efficient solutions.

I want to build this in #BuildInPublic to make myself more accountable and celebrate my small wins to the community which will re-kindle the fire and keep em' coming.

## Solutions

### 01. [Remove Duplicates](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
#### Solved at : 2026-08-13T17:37:20.421Z
- A pointer `k` that holds the place where the next possible replcement could happen
- Set `k=0` and Loop through the array from 1st element as we know 
- Check if the num at `k`th position is equal to the num at the current position
    - If `yes`, we do nothing because the value has not changed
    - If `no`,  we increment the position of k where we replace the value of the `nums[k]` with the current value;

### 02. [Remove Elements](https://leetcode.com/problems/remove-element/description/)
#### Solved at : 2026-08-13T17:57:40.684Z
- Initialize a pointer `k` to keep track of the slot where the number can be replaced
- Loop through the array
- Check if the current value is not equal to the `val`
- - If `yes`, set `nums[k]` = `nums[i]`
- Return the k+1 as it provides the number of elements other than the `val`.
