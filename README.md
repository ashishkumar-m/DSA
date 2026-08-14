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

### 03.[Reverse String](https://leetcode.com/problems/reverse-string/)
#### Solved at : 2026-08-13T18:38:29.237Z
- Initialize pointers `left` to left-most element of the array  and `right` to the right-most element of the array;
- Swap the elements `arr[left] <=> arr[right]` using a `temp` variable or use `array destructuring` if choice of your language allows it;
- Increment `left` and Decrement `right` by one. Stop when the `right <= left`;

### 04.[Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)
#### Solved at: 2026-08-14T07:37:26.806Z
- Initialize `minPrice` with `Infinity`(highest number) and `maxProfit` with `0`(lowest)
- Loop through the `prices` array.
    - Check if each `price` is lesser than the `minPrice`(We do this to keep track of stock at which the price is lowest to gain max Profit)
        - if `yes`, re-assign `minPrice` with `price`
    - Check if the `price - minPrice` is greater than `maxProfit`
        - if `yes`, re-assign maxProfit with `price - minPrice`
-Return `maxProfit`