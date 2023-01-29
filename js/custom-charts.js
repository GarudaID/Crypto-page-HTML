/* Chart Up */
var charts = document.getElementsByClassName("chartup");

for (chart of charts) {
	var ctx = chart.getContext('2d');
	new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["1", "2", "3", "4", "5", "6", "7"],
		datasets: [{
			label: "",
			borderColor: "#47e7ce",
			pointBorderColor: "#47e7ce",
			pointBackgroundColor: "rgba(255, 255, 255, 1)",
			pointHoverBackgroundColor: "rgba(128, 182, 244, 1)",
			pointHoverBorderColor: "#47e7ce",
			pointBorderWidth: 1,
			pointHoverRadius: 1,
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			fill: false,
			borderWidth: 2,
			data: [1, 6, 2, 5, 1, 7, 8]
		}
		]
	},
	options: {          
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					display: false
				},
				gridLines: {
					drawTicks: false,
					display: false,
					drawBorder: false
				}

			}],
			xAxes: [{
				gridLines: {
					zeroLineColor: "transparent",
					display: false,
					drawBorder: false
				},
				ticks: {
					display: false
				}
			}]
		}
	}
	});
}

/* Chart Down */
var chartds = document.getElementsByClassName("chartdown");

for (chartd of chartds) {
	var ctx = chartd.getContext('2d');
	new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
		datasets: [{
			label: "",
			borderColor: "#e58db6",
			pointBorderColor: "#e58db6",
			pointBackgroundColor: "rgba(255, 255, 255, 1)",
			pointHoverBackgroundColor: "rgba(128, 182, 244, 1)",
			pointHoverBorderColor: "#e58db6",
			pointBorderWidth: 1,
			pointHoverRadius: 1,
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			fill: false,
			borderWidth: 2,
			data: [4, 1, 6, 2, 4, 1, 9, 1]
		}
		]
	},
	options: {          
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					display: false
				},
				gridLines: {
					drawTicks: false,
					display: false,
					drawBorder: false
				}

			}],
			xAxes: [{
				gridLines: {
					zeroLineColor: "transparent",
					display: false,
					drawBorder: false
				},
				ticks: {
					display: false
				}
			}]
		}
	}
	});
}

