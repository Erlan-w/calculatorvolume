export let dateToChartTimeSeconds = ( date ) => {
	return Date.UTC( date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0 ) / 1000;
};