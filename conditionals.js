const raining = true;

const cold = false;

const temperature = 16;

if(raining){
	console.log("Don't forget your umbrella!");
}

if(temperature < 0){
	console.log("Make sure you pick out a scarf!");
}else if( temperature < 15){
	console.log("Short sleeve won't cut it!")
}else{
	console.log("Short sleeves are fine");
}
console.log("Now you're ready to go outside!");