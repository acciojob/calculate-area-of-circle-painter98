//your JS code here. If required.

let radius = prompt('enter Radius of the circle');

function Area(radius){
	let area = Math.round(Math.PI*radius*radius,2);
	return `The area of the circle with radius 4 is ${area}`;
}
console.log(Area(radius));
