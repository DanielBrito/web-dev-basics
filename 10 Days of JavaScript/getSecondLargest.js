/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    nums.sort(function(a, b) {return b-a});
    let max = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i]!=max){
            return nums[i];
        }
    }
}

