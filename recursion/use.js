


function print(index,arr,curr,target){
        if(target === 0){
            console.log(curr); 
            return             
    }
  for(let i= index; i<arr.length; i++){
    if(i > index && arr[i] === arr[i-1]) continue;
    if(arr[i] > target) break;
        curr.push(arr[i])
    print(i+1,arr,curr,target-arr[i])
    curr.pop()
}
}
let arr = [1,1,1,2,2]
 arr.sort((a, b) => a - b);
print(0,arr,[],4)









function print(index,arr,curr,target){}









