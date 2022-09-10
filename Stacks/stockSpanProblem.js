/**
 *      [  0,   1,  2,  3,  4,  5,  6]
 *      [100, 80, 60, 70, 60, 75, 85]
 *      find next greater element
 *      85 -> 100 {
 *          100 Index = 0, 85 Index = 6
 *          6-0 = 6
 *      }
 *      75 -> 80 {
 *          80 Index = 1, 75 Index = 5
 *          5-1 = 4
 *      }
 *      60 -> 70 {
 *          70 Index = 3, 60 Index = 2
 *          3-2 = 1
 *      }
 *      70 -> 80 {
 *          80 Index = 3, 70 Index = 1
 *          3-1 = 2
 *      }
 *      60 -> 80 {
 *          60 Index = 2, 80 Index = 1
 *          2-1 = 1
 *      }
 * 
 *      80 -> 100 {
 *          80 Index = 1, 100 Index = 0
 *          1-0 = 1
 *      }
 * 
 *      100 {
 *          first = 1;
 *      }
 *      
 * Output => [1,1,1,2,1,4,6]
 * 
 */

function nge(arr) {
    let stack = [];
    let output = [];
    stack[0] = 0; //[5,3]
    for (let i = 1; i < arr.length; i++){
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
            output[stack.length - 1] = arr[i]; // [5,  ,  , ]
            stack.pop();
        }
        stack.push(arr[i]);
    }
    while (stack.length > 0) {
        output[stack.length - 1] = stack[stack.length - 1];
        stack.pop()
    }
    return output;
}

console.log(nge([2,5,3,7,5,8,9]));

function pse(arr) {
    let stack = [];
    let output = [];
    
}