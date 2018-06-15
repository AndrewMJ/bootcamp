// Write a JavaScript program to compute the union of two arrays.

// console.log(union([1, 2, 3], [100, 2, 1, 10]));

// [1, 2, 3, 10, 100]





function union(array1, array2){

	//by putting declaring inside of the function, it encapsulates it

	//this function can now be used anywhere

	// let unionArray = []; 



	// for(let i = 0; i< array1.length; i++){

	// 	unionArray.push(array1[i]); 

	// }

	// for (let j =0 ; j< array2.length; j++){

	// 	unionArray.push(array2[j]); 

	// }

	// return unionArray;



	return array1.concat(array2);

}



// function onlyUnique(value, index, self){

// 	//value - what you want to get

// 	//index - is where it is 

// 	//self is the type 

// 	//returns a boolean; it compares the value to the index

// 	return index === self.indexOf(value);

// }



//now you can create a new Array that calls the method you created

let amberArray = union([1, 2, 3,3,3,3,3,3], [100, 2, 1, 10]);

//this filters the array you just created and prints it 

console.log(amberArray);

//only filters the array, it doesn't actually change the original. It returns a new array that satifies teh conistions 

//let newArray = amberArray.filter(onlyUnique); 

// console.log("My new Array: " + newArray)

//console.log(amberArray.filter(onlyUnique));



console.log("ODD :" + amberArray.filter((x=> x%2==1 )));

console.log("EVEN :" + amberArray.filter((x=> x%2==0 )));



console.log("unionArray :" + amberArray.filter((value, index, self)=>{ return index === self.indexOf(value)}));

console.log("unionArray2 :" + amberArray.filter((a, b, c)=>{ return b === c.indexOf(a)}));



console.log("Original " + amberArray)







// console.log(onlyUnique(5, 5, "0123456"));

