
document.getElementById("btn").onclick = function (event) {
    var mystring = document.getElementById('str').value;
    //write logic to find the length of string
    document.getElementById("output").innerHTML = "Length is " + mystring.length;
}

document.getElementById("btn2").onclick = function (event) {
    palindrome(document.getElementById('str').value);
}

function palindrome(myString) {
    //write palindrome logic
    myString = myString.toLowerCase();
    let checkPalindrome = myString.split('').reverse().join(''); // using split, reverse and join to reverse the string

    if (myString === checkPalindrome) // checking whether its same or not
        document.getElementById("output").innerHTML = myString + " is a Palindrome"; // if same then this
    else
        document.getElementById("output").innerHTML = myString + " is not a Palindrome"; //otherwise this...         

}
