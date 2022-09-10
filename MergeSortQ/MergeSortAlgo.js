/**
 * Merge Sort is a DnC Algorithm (Divide and Conquerer).
 * IS FEBONACCI A DnC Algo?
 * -> In DnC algo, the function dont repeat itself. 
 * -----------------     -----------------
 *                  F(5)
 *                 /    \
 *                /      \
 *              F(4)      F(3)
 *              / \        /  \
 *             /   \      /    \
 *           F(3)  F(2)  F(2)  F(1)
 * -----------------     -----------------
 * As you can see in the above Example, in Febonacci, the F(3) and F(2) is repeating itself.
 * That's why Febonacci is not a DnC Algo.
 * 
 * -> And in Merge Sort, the array doesnt repeat
 * -----------------     -----------------
 *               [5,3,7,9]
 *                /     \
 *               /       \
 *            [5,3]     [7,9]
 *            / \        /  \
 *           /   \      /    \
 *         [5]   [3]  [7]    [9]
 * -----------------     -----------------
 * 
 * In the Above Example, array isnt repeating itself and thats what happens in the DnC Algo.
 *  
 * So The General Reccurence solution of DnC is
 *      T(n) = aT(n/b) + f(n)
 *  a --> Number of Smaller Sub Problems
 *  n/b -> Size of Smaller Sub Problems
 *  
 * if you have a problem of size 'n' and you divide it into 'a' number of smaller sub problems, 'a' problems of size of n/b smaller sub problems  
 *              n
 *             /\ ....
 *            / \ .... a times
 *         n/b   n/b ....
 *  *----*----*----*----*----*----*
 *                n
 *               /\
 *              / \
 *           n/2   n/2
 *  *----*----*----*----*----*----*
 * 
 *    T(n) = T(n/2) + T(n/2) + nc
 *  T(n/2) --> operation to sort right and left array
 *  nc --> merging two array
 * 
 *    T(n) = 2T(n/2) + nc -> this is the RECURRENCE solution of merge sort;
 *   if we solve this, we can get the number of operation to solve the merge sort...
 * ----     -----------------       -----------------       -----------------       
 *  Levels          Size Of SubProblems         # of Sub Problems       Work
 *    0                     n                           1                 nc
 *                          /\
 *     1                 n/2  n/2                       2                 nc
 *                      /\      /\  
 *     2             n/4 n/4  n/4 n/4                   4                 nc
 *
 *     i                     n/2^i                      i                 nc
 * -----------------       -----------------       -----------------    ----
 *                                i = log(n)
 *              Total Work Done =    Σ nc  => nclogn
 *                                i = 0
 *  and in 'nclogn' the c is constant so we can avoid it
 *  
 *              Time complexity will be => O(nlogn)
 *              Space Complexity => O(n)
 * 
 */





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
    // return arr;
}

// function merge(arr1, arr2) {
//     let i = 0, j = 0,k = 0, result = [];
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] > arr2[j]) {
//             result[k] = arr2[j]
//             k++;
//             j++;
//         }
//         else if (arr1[i] < arr2[j]) {
//             result[k] = arr1[i]
//             k++;
//             i++;
//         }
//     }
//         while (i<arr1.length) {
//             result[k] = arr1[i]
//             k++;
//             i++;
//         }
    
//         while (j<arr2.length) {
//             result[k] = arr2[j];
//             k++;
//             j++;
//         }
//     return result;
// }

function mergeSort(arr, start, end) {
     if (start >= end)
        return;
    let mid = Math.floor((end + start) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    merge(arr, start, mid, end);

}
let res = [1, 18, -1,-14,-2,1,0,13, 5, 4, 7, 15]
 mergeSort(res, 0, res.length-1);
console.log(res); 