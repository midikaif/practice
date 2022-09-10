/*
`Question -> Inversion Pairs`
    `Let A[0...n-1] be an array of an n distinct positive integers. If i < j  and A[i] > A[j] then (i,j) called an inversion of A. Given array A, your task is to find the number of  inversions of A`

    `Example: [3,1,2] -> ans = 2`
    */

let noPairs = 0;
    function merge(arr, start, mid, end) {
        let m1 = mid - start+1;
        let m2 = end - mid;
        let arr1 = Array(m1);
        let arr2 = Array(m2);
    
        for (let i = 0; i < m1; i++) {
            arr1[i] = arr[start + i];
        }
    
        for (let i = 0; i < m2; i++) {
            arr2[i] = arr[mid + i + 1];
        }
        
        let i = 0, j = 0, k = start;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] > arr2[j]) {
                // if(arr1[i] > 2*arr2[j])  -> For double inversion pairs
                    noPairs += (m1 - i);
                arr[k] = arr2[j]
                k++;
                j++;
            }
            else {
                arr[k] = arr1[i]
                k++;
                i++;
            }
        }
            while (i<arr1.length) {
                arr[k] = arr1[i]
                k++;
                i++;
            }
        
            while (j<arr2.length) {
                arr[k] = arr2[j];
                k++;
                j++;
            }
    }

    
    function mergeSort(arr, start, end) {
        if (start >= end)
           return;
       let mid = Math.floor((end + start) / 2);
       mergeSort(arr, start, mid);
       mergeSort(arr, mid+1, end);
       merge(arr, start, mid, end);
   
   }
   let res = [2,3,8,6,1]
    mergeSort(res, 0, res.length-1);
   console.log(noPairs); 