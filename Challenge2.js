
function chall(nums){
    let max=nums[0];
    for (let i=0; i<=nums.length-1;i++){
        if (nums[i]>max){
            max=nums[i]
        }  
    }
    let c=0
    nums.sort()
    for (let i=1;i<=nums.length-1;i++){
       if(nums[i]-nums[i-1]==2){
            c+=nums[i-1]+1
       }
    }
    if (c==0 && max<nums.length){
        return max+1
    }
    else{
        return c
    }
}
console.log(chall([3,0,1]))
console.log(chall([9,6,4,2,3,5,7,0,1]))
console.log(chall([0,1]))