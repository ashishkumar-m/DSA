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

