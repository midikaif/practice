function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}

// console.log(selectionSort([3, 7, 4, 1, 4, 8, 0, 4, -1, 3]));

/**
 * 
 *      Kth Smallest
 * 
 */

function selectionSortKthLargest(arr, k) {
    let n = arr.length;
    for (let i = 0; i < k; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr[k - 1]
}

// console.log(selectionSortKthLargest([3, 7, 4, 1, 4, 8, 0, 4, -1, 3], 2));





// ------------------------------------------------------SHIFTING ELEMENTS
/**
 *          i = 0;
 *          temp = i+1 i.e. 2;
 *          a = length-1;
 *          [1,2,4,6,7]
 *          [1,1,2,4,6]
 *          a= 0;
 *          i + 1 = i i.e. 2 = 1;
 *          
 *          [1,1,4,6,7]
 *                   
 * i++;
 *          
 */

function selectionSortStable(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        for (let k = minIndex; k > i; k--) {
            arr[k] = arr[k - 1];
        }
        arr[i] = temp;
        // [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    return arr;
}

console.log(selectionSortStable([3, 7, 4, 1]));