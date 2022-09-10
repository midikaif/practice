function bubbleSort(arr) {
    /**
     * Time -> Worst -> O(n^2)
     *         best -> O(n)
     * Space -> O(1);
     */
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let swapped = false;
        for (let j = 1; j < n - i - 1; j++) {
            if (arr[j - 1] > arr[j]) {
                swapped = true;
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// console.log(bubbleSort([7,-1,0,3,2,5,1,0,-1]));


function bubbleSortKthLargest(arr, k) {
    /**
     * Time -> Worst -> O(n^2)
     *         best -> O(n)
     * Space -> O(1);
     */
    let n = arr.length;
    for (let i = 0; i < k; i++) {
        let swapped = false;
        for (let j = 1; j <= n - i - 1; j++) {
            if (arr[j - 1] > arr[j]) {
                swapped = true;
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr[n - k];
}

// console.log(bubbleSortKthLargest([5, 2, 1, 6], 4));