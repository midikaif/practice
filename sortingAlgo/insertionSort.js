function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++){
        let nextElem = arr[i], j = i -1;
        while (j >= 0 && arr[j] > nextElem) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = nextElem;
    }
    return arr;
}

console.log(insertionSort([3, -1,0,02, 5, 6, 1]));