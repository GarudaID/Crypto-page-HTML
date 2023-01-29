var chartdetails = document.getElementById('ChartDetails').getContext("2d");

var gradientStroke = chartdetails.createLinearGradient(200, 0, 100, 0);
gradientStroke.addColorStop(0, "rgba(71, 231, 206, 1)");
gradientStroke.addColorStop(1, "rgba(15, 224, 191, 1)");
   

var gradientFill = chartdetails.createLinearGradient(0, 0, 0, 170);
gradientFill.addColorStop(0, "rgba(71, 231, 206, 0.5)");
gradientFill.addColorStop(1, "rgba(71, 231, 206, 0)");


var ChartDetails = new Chart(chartdetails, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            label: "USD",
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: "rgba(255, 255, 255, 1)",
            pointHoverBackgroundColor: "rgba(128, 182, 244, 1)",
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 1,
            pointHoverRadius: 3,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: true,
			backgroundColor: gradientFill,
            borderWidth: 2,
            data: [42500, 38000, 48500, 39200, 45000, 36500, 49800]
        }
		]
    },
    options: {          
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
				position: 'right',
                ticks: {
                    fontColor: "rgba(255,255,255,0.8)",
                    fontStyle: "bold",
                    beginAtZero: false,
                    maxTicksLimit: 5,
                    padding: 20,
					callback: function(value, index, values) {
					  return Number((value / 1000).toString()) + 'K'; //pass tick values as a string into Number function
					}
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