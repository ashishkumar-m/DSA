function reverseString(arr) {
    if (arr.length <= 1) return arr;
    let left = 0;
    let right = arr.length - 1;
    while(right > left){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

module.exports = reverseString;