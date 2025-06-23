// 1) PRINT NAME IN n NUMBER OF TIME :

// function print(i,n){
//   if(i>n){
//     return
//   }
//   console.log("prem");
//   print(i+1,n)
// }
// print(1,5)

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// 2) PRINT NUMBER LINERALY FROM 1 TO N

// function num(i,n){
//     if(i > n){
//         return
//     }
//     console.log(i);
//     num(i+1,n)
// }
// num(1,10)

// function num(i) {
//   if (i < 1) {
//     return;
//   }
//   num(i - 1);                      // BACKTRACKING
//   console.log(i);
// }
// num(10);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// 3) PRINT NUMBER LINEARLY FROM N TO 1

// function num(i,n){
//     if(i<n){
//         return
//     }
//     console.log(i);
//     num(i-1,n)
// }
// num(10,1)

// function num(n){
//     if(n<1){
//         return
//     }
//     console.log(n);
//     num(n-1)
// }
// num(10)

// function num(i, n) {
//   if (i > n) {
//     return;
//   }
//   num(i + 1, n);
//   console.log(i);
// }
// num(1, 10);

//##############################################################################################################################################

// 4) SUMATION OF ALL NUMBERS

// function num(i,sum){
//     if(i<1){
//         console.log(sum);
//         return
//     }
//     num(i-1,sum+i)
// }
// num(10,0)

// function num(n){
//     if(n<1){
//         return 0
//     }
//      return n+num(n-1)
// }
// console.log(num(10));

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// 5) REVERSE THE ARRAY

// function swap(arr,l,r){
//   if(l >= r){
//     return
//   }
//   [arr[l],arr[r]] = [arr[r],arr[l]]
//   swap(arr,l+1,r-1)
// }
// const arr = [24,46,89,5,4,2]
// swap(arr,0,arr.length-1)
// console.log(arr);

// function swap(i){
//      if(i >= n/2) return
//      [arr[i],arr[n-i-1]] = [arr[n-i-1],arr[i]]
//      swap(i+1)
// }
// const arr = [34,5,8,9,7,4,3]
// console.log(arr);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// 6) CHECK IF IT IS PALINDROM

// function isPalindrome(str, i = 0) {
//     if (i >= str.length / 2) return true;
//     if (str[i] !== str[str.length - i - 1]) return false;
//     return isPalindrome(str, i + 1);
// }

// const word = "prem";

// console.log(isPalindrome(word));  // Output: false
// console.log(isPalindrome("madam")); // Output: true

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// RECURSION SUBSEQUENCES

function print(i, arr, curr) {
  let n = arr.length;
  if (i >= n) {
    console.log(curr);
    return;
  }
  curr.push(arr[i]);
  print(i + 1, arr, curr);
  curr.pop(arr[i]);
  print(i + 1, arr, curr);
}
let arr = [3, 1, 2];
print(0, arr, []);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//PRINTING SUBSEQUENCES WHERE SUM IS K  

// function print(index, arr, curr, sum, target) {
//   let n = arr.length;
//   if (index >= n) {
//     if (sum === target) {
//       console.log(curr);
//     }
//     return;
//   }
//   // Include the current element
//   curr.push(arr[index]);
//   sum += arr[index];
//   print(index + 1, arr, curr, sum, target);
//   // Exclude the current element
//   curr.pop();
//   sum -= arr[index];
//   print(index + 1, arr, curr, sum, target);
// }
// let arr = [1, 2, 1];
// let target = 2; 
// print(0, arr, [], 0, target);                 OUTPUT : [1, 1], [2]


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// PRINT ANYONE OF SUBSEUENCES WHERE SUM IS K

// function print(index, arr, curr, sum, target) {
//   let n = arr.length;
//   if (index >= n) {
//     if (sum === target) {
//       console.log(curr);
//       return true
//     }
//     else{
//     return false;
//     }
//   }
//   curr.push(arr[index]);
//   sum += arr[index];
// if (print(index + 1, arr, curr, sum, target) === true){
//       return true
// }
//  curr.pop();
//   sum -= arr[index];
//   if(  print(index + 1, arr, curr, sum, target) === true){
//     return true
//   }
//   return false
// }
// let arr = [1, 2, 1];
// let target = 2; // You must define a target value
// print(0, arr, [], 0, target);                         OUTPUT : [1, 1]

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//COUNT THE SUBSEQUENCES WITH SUM OF K


// function countSubsequences(index, arr, curr, sum, target) {
//   let n = arr.length;
//   if (index >= n) {
//     return sum === target ? 1 : 0;
//   }
//   // Include the current element
//   curr.push(arr[index]);
//   sum += arr[index];
//   let l = countSubsequences(index + 1, arr, curr, sum, target);

//   // Exclude the current element
//   curr.pop();
//   sum -= arr[index];
//   let r = countSubsequences(index + 1, arr, curr, sum, target);

//   return l + r;
// }

// let arr = [1, 2, 1,4,5];
// let target = 6; 
// console.log(countSubsequences(0, arr, [], 0, target)); // ✅ Print the count
 

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


 //    MERGE SORT

// function mergeSort(arr,l,r){
//     if(l >= r){
//         return
//     }
//     let mid = Math.floor((l+r)/2)
//     mergeSort(arr,l,mid)
//     mergeSort(arr,mid+1,r)
//     merge(arr,l,mid,r)
// }
// function merge(arr,l,mid,r){
//     let temp = []
//     let left = l
//     let right = mid+1
//     while(left <= mid && right <= r){
//         if(arr[left] <= arr[right]){
//             temp.push(arr[left])
//             left++
//         }
//         else{
//             temp.push(arr[right])
//             right++
//         }
//     }
//     while(left <= mid){
//         temp.push(arr[left])
//         left++
//     }
//     while(right <= r){
//         temp.push(arr[right])
//         right++
//     }
//     for(let i=l; i<=r; i++){
//         arr[i] = temp[i-l]
//     }
// }
// let arr = [38, 27, 43, 3, 9, 82, 10];
// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//QUIK SORT

// function quickSort(arr, l, r) {
//   if (l < r) {
//     // Fix: Recursive condition should be checked first
//     let pivotIndex = partition(arr, l, r);
//     quickSort(arr, l, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, r);
//   }
// }

// function partition(arr, l, r) {
//   let pivot = arr[l]; // Choosing first element as pivot
//   let i = l;
//   let j = r;

//   while (i < j) {
//     while (i <= r && arr[i] <= pivot) {
//       i++;
//     }
//     while (j >= l && arr[j] > pivot) {
//       j--;
//     }
//     if (i < j) {
//       // Swap elements if i and j haven't crossed
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   // Swap pivot into its correct position
//   [arr[l], arr[j]] = [arr[j], arr[l]];

//   return j; // Return the correct position of pivot
// }

// // Example usage
// let arr = [38, 27, 43, 3, 9, 82, 10];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// Combination Sum


// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinationsof candidates where the 
// chosen numbers sum to target. You may return the combinations in any order.The same number may be chosen from candidates an unlimited number 
// of times.Two combinations are unique if the frequency of at least one of the chosen numbers is different.The test cases are generated such 
// that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Input: (candidates = [2, 3, 6, 7]), (target = 7);
// Output: [[2, 2, 3], [7]];


// function print(index,arr,curr,target){
//   if(index >= arr.length){
//     if(target === 0){
//       console.log(curr);    
//     }
//     return
//   }
//   if(arr[index] <= target){
//     curr.push(arr[index])
//     print(index,arr,curr,target-arr[index])
//     curr.pop()
//   }
//   print(index+1,arr,curr,target)
// }
// let arr = [1,2,3,4,5]
// print(0,arr,[],5)


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


// Input: (candidates = [10, 1, 2, 7, 6, 1, 5]), (target = 8);
// Output: [
//   [1, 1, 6],
//   [1, 2, 5],
//   [1, 7],
//   [2, 6],
// ];




