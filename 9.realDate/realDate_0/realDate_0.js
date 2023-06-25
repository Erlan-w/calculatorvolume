// import { dateToChartTimeSeconds } from "../dateToChartTimeSeconds.js";

export let data = [];

let year = 2023;
let month = 0;

const degreePerSecond = 6;

let val = 0;


// for ( let days = 0; days < 1; days++ ) {
for ( let seconds = 0; seconds <= 120; seconds++ ) {
	if ( ( seconds === 0 ) ) {
		val = 0;
		// let date = new Date( year, month, days, 0, 0, second, 0 );

		// console.log( date );
		// let dateNow = dateToChartTimeSeconds( date );
		// console.log( dateNow );

	} else {
		val += degreePerSecond;
		val %= 360;
		// console.log( dateNow, val );

		// let isi = { "time": dateNow, "value": val };
		// data.push( isi );

		console.log( seconds, val );
	}
}
// }

// console.log( data );

let hourDegree = 0;
const degreePerJam = 6;

for ( let hour = 0; hour < 30; hour++ ) {
	if ( !( hour === 0 ) ) {
		hourDegree += degreePerJam;
		hourDegree %= 360;
	}
	console.log( hour, hourDegree );

}