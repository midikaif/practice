function partitionFirst(arr, low, high) {
    let pivot = arr[low];
    let i = low + 1;
    let j = high;
    do {
        while (arr[i] <= pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    } while (i < j);
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

function quickSort(arr, low, high) {
    if (low >= high) {
        return;
    }
    let partitionIndex = partitionFirst(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
 }

let arr = [1, 2, 5, 3, 8, 9, 0];
quickSort(arr, 0, arr.length - 1)
console.log(arr);
