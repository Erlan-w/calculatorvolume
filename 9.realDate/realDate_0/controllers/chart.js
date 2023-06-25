const root = document.getElementById( 'root' );

import { data } from "../realDate_0.js";

const chart = LightweightCharts.createChart( root, {
	layout: {
		backgroundColor: '#253248',
		textColor: 'rgba(255, 255, 255, 0.9)',
	},
	grid: {
		vertLines: {
			color: '#334158',
		},
		horzLines: {
			color: '#334158',
		},
	},
	priceScale: {
		borderColor: '#485c7b',
	},
	timeScale: {
		borderColor: '#485c7b',
		timeVisible: true,
		secondsVisible: true,
	},
	localization: {
		locale: 'id-ID',
	}
} );

const areaSeries = chart.addAreaSeries( {
	lineWidth: 2,
} );
areaSeries.setData( data );

// const areaSeries1 = chart.addAreaSeries( {
// 	lineWidth: 2,
// } );
// areaSeries1.setData( data1 );

// const candlestick = chart.addCandlestickSeries( {} );

// 			candlestick.setData( data );



chart.priceScale().applyOptions( {
	autoScale: false, // disables auto scaling based on visible content
	scaleMargins: {
		top: 0.1,
		bottom: 0.2,
	},
} );

chart.timeScale().fitContent();