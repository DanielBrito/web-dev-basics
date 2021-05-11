let ids = [1, 2, 3, 6, 9, 8, 7, 4];
let nums = [1, 2, 3, 6, 9, 8, 7, 4];

btn5.onclick = function() {
    nums.unshift(nums.pop());

    for (let i = 0; i <= 7; i++) {
        document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }
};