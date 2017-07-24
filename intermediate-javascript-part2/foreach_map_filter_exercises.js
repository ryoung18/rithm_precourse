/*forEach, Map, and Filter.
https://www.rithmschool.com/courses/intermediate-javascript-part-2/javascript-iterators-foreach-map-filter


Exercises
Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
*/

function printFirstAndLast(arr){

	arr.forEach( el => console.log(el[0] + el[el.length-1]))
}


printFirstAndLast(['awesome','example','of','forEach']) 

// ae
// ee
// of
// fh


//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.

function addKeyAndValue(arr, string, boolean){
    let newArr = [];

	 arr.forEach(el => {
        el[string] = boolean 
        newArr.push(el)
    })

  return newArr;
}

console.log(
addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true) 
)
/*
[
    {
        name: 'Elie',
        isInstructor: true
    },
    {
        name: 'Tim',
        isInstructor: true
    },
    {
        name: 'Elie',
        isInstructor: true
    }
]
*/

/*
You can read more about forEach here.

map
Unlike forEach, map returns a new array of the values returned in the callback. The structure of the callback function to map is identical to forEach: once again, the three parameters are the value, index and array (in that order).

var arr = [1,2,3,4];
arr.map(function(val, index, array){
    return val * 2;
}); // [2,4,6,8]

var tripledValues = arr.map(function(val,index,arr){
    return val*3;
});

tripledValues; // [3,6,9,12]

// Here is how we can refactor our double method to use map
function doubleArray(arr){
    // return the result of arr.map
    return arr.map(function(val){
        // return a new array with each value doubled
        return val *2;
    });
}

doubleArray([2,4]); // [4,8]

Exercises
Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
*/

function valTimesIndex(arr){

	return arr.map((el, index) => el * index)
}

console.log(
valTimesIndex([1,2,3])) // [0,2,6]
console.log(
valTimesIndex([5,10,15])) // [0,10,30]

/*
Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
*/

function extractKey(arr, string){
	let result = [];

	arr.map(el => {
	  result.push(el[string]);
	})

	return result;
}
console.log(
extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"))

/*
// ["Elie", "Tim", "Matt"]
You can read more about map here.

filter
filter returns an array just like map, but inside the callback you must return an expression that evaluates to true or false. If the expression evaluates to true, the value will be added to the returned array.

You can think of the callback to filter as a sort of testing function. If the element in the array passes the test, filter keeps the element; otherwise, filter tosses it out.

var arr = [1,2,3,4];
var valuesGreaterThanTwo = arr.filter(function(val){
    return val > 2; 
});

valuesGreaterThanTwo // [3,4]
Exercises
Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive
*/

function filterLetters(arr, letter){
	return arr.filter(val => val.toLowerCase() === letter.toLowerCase()).length
}

console.log(
filterLetters(["a","a","b","c","A"], "a"), // 3
filterLetters(["a","a","b","c","A"], "z"), // 0
filterLetters(["a","a","b","c","A"], "B")) // 1


//Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:
function filterKey(arr, str){
    return arr.filter(el => !!el[str])
}

console.log(
filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")
)
// [{name: "Tim", isInstructor:true, isHilarious:true}]

