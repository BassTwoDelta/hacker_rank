function getSecondLargest(nums) {
    let max = Math.max(...nums)
    let second = 0;
    for(let i=0; i < nums.length; i++){
        if(nums[i]>second && nums[i]<max){
            second = nums[i];
        }
    } return second;
}
