function extractKey(arr, str){
	return arr.reduce((acc, el) =>{
		acc.push(el[str]);
		return acc;
	},[])
}



console.log(
extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")
)

function filterLetters(arr, letter){
    letter = letter.toLowerCase();
	return arr.reduce((acc, el) => {
				if(el.toLowerCase() === letter){
				   acc++
				}
				return acc
			},0)
}

console.log(
filterLetters(["a","a","b","c","A"], "a"), // 3
filterLetters(["a","a","b","c","A"], "z"), // 0
filterLetters(["a","a","b","c","A"], "B") // 1
)

function addKeyAndValue(arr, string, boolean){
	return arr.reduce((acc, el) => {
		el[string] = boolean;
		acc.push(el);
		return acc;	
	}, [])
}

console.log(
addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true))