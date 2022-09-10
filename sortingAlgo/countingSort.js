function countingSortNotStable(arr) {
    let maxElement = Math.max(...arr);
    let freq = new Array(maxElement + 1).fill(0);
    for (let i = 0; i < arr.length; i++){
        freq[arr[i]]++;
    }

    let k = 0;
    for (let i = 0; i < freq.length; i++){
        while (freq[i] > 0) {
            arr[k] = i;
            k++;
            freq[i]--;

        }
    }
    return arr;
}

console.log(countingSortNotStable([2,1,3,2,1,4,5,3,2,6]));


function countingSort(arr) {
/**
 * Time -> O(n+k)
 * Space -> O(n+k)
 */


    let maxElement = Math.max(...arr);  //O(n)
    let freq = new Array(maxElement + 1).fill(0); //O(1)

    for (let i = 0; i < arr.length; i++){ //O(n)
        freq[arr[i]]++;
    }

    for (let i = 1; i < freq.length; i++){ //O(k)
        freq[i] += freq[i-1]; 
    }

    let output = new Array(arr.length);
    for (let i = arr.length-1; i >=0 ; i--){ //O(n)
        let currentElem = arr[i];
        let index = freq[currentElem];
        output[index - 1] = currentElem;
        freq[currentElem]--;
    }
    return output;
}

console.log(countingSort([2,1,3,2,1,4,5,3,2,6]));