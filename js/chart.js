// // Chart Bar

// var options = {
//   series: [
//     {
//       name: "Recure",
//       data: [30, 38, 50, 27, 45],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//     toolbar: {
//       show: false,
//     },
//   },
//   title: {
//     text: "Contractor target progress",
//   },
//   colors: ["#F3BE00"],
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "35%",
//       endingShape: "rounded",
//       borderRadius: 4,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: false,
//     width: 0,
//     colors: ["transparent"],
//   },
//   xaxis: {
//     categories: ["Recure", "New For", "Content", "Design", "Marketing"],
//   },
//   yaxis: {
//     title: {
//       text: "$ (thousands)",
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
//   tooltip: {
//     y: {
//       formatter: function (val) {
//         return "$ " + val + " thousands";
//       },
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chartBar"), options);
// chart.render();

// // Donut Chart
// var options = {
//   series: [82, 40],
//   chart: {
//     type: "donut",
//   },
//   labels: ["Completed tasks", "Incomplete tasks"],
//   title: {
//     text: "Project Compliance status",
//   },
//   strokeWidth: 5,
//   colors: ["#00BC8B", "#F3BE00"],
//   plotOptions: {
//     pie: {
//       donut: {
//         labels: {
//           show: true,
//           total: {
//             show: true,
//             // showAlways: true,
//             fontSize: 20,
//             color: "#878787",
//           },
//         },
//       },
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
// legend: {
//   show: true,
//   showForSingleSeries: false,
//   showForNullSeries: true,
//   showForZeroSeries: true,
//   position: "right",
//   // horizontalAlign: "center",
//   floating: false,
//   fontSize: "16px",
//   fontFamily: "Poppins",
//   fontWeight: 400,
//   formatter: undefined,
//   inverseOrder: false,
//   width: undefined,
//   height: undefined,
//   tooltipHoverFormatter: undefined,
//   customLegendItems: [],
//   offsetX: 0,
//   offsetY: 0,
//   labels: {
//     colors: ["#878787", "#878787"],
//     useSeriesColors: false,
//   },
//     markers: {
//       width: 20,
//       height: 20,
//       strokeWidth: 0,
//       strokeColor: "#fff",
//       fillColors: undefined,
//       radius: 3,
//       customHTML: undefined,
//       onClick: undefined,
//       offsetX: 0,
//       offsetY: 0,
//     },
//     itemMargin: {
//       horizontal: 5,
//       vertical: 0,
//     },
//     onItemClick: {
//       toggleDataSeries: true,
//     },
//     onItemHover: {
//       highlightDataSeries: true,
//     },
//   },
//   stroke: {
//     show: false,
//     width: 0,
//     colors: ["transparent"],
//   },
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200,
//         },
//         legend: {
//           position: "bottom",
//         },
//       },
//     },
//   ],
// };

// var chart = new ApexCharts(document.querySelector("#chartDonut"), options);
// chart.render();

// // chart three bar
// var options = {
//   series: [
//     {
//       name: "Social enterprise",
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//     },
//     {
//       name: "Indigenous Business",
//       data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//     },
//     {
//       name: "Disability Social Enterprise",
//       data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//     toolbar: {
//       show: false,
//     },
//   },
//   title: {
//     text: "Total Project Social Suppliers",
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "55%",
//       endingShape: "rounded",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: true,
//     width: 2,
//     colors: ["transparent"],
//   },
//   xaxis: {
//     categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
//   },
//   yaxis: {
//     title: {
//       text: "$ (thousands)",
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
//   tooltip: {
//     y: {
//       formatter: function (val) {
//         return "$ " + val + " thousands";
//       },
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chartThreeBar"), options);
// chart.render();

// // stacked chart
// var options = {
//   series: [
//     {
//       name: "PRODUCT A",
//       data: [44, 55, 41, 67, 22, 43, 21, 49],
//     },
//     {
//       name: "PRODUCT B",
//       data: [13, 23, 20, 8, 13, 27, 33, 12],
//     },
//     {
//       name: "PRODUCT C",
//       data: [11, 17, 15, 15, 21, 14, 15, 13],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//     stacked: true,
//     stackType: "100%",
//   },
//   title: {
//     text: "Contractor Spend Status",
//   },
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         legend: {
//           position: "bottom",
//           offsetX: -10,
//           offsetY: 0,
//         },
//       },
//     },
//   ],
//   xaxis: {
//     labels: {
//       rotate: -45,
//     },
//     categories: [
//       "2011 Q1",
//       "2011 Q2",
//       "2011 Q3",
//       "2011 Q4",
//       "2012 Q1",
//       "2012 Q2",
//       "2012 Q3",
//       "2012 Q4",
//     ],
//   },
//   fill: {
//     opacity: 1,
//   },
//   legend: {
//     position: "right",
//     offsetX: 0,
//     offsetY: 50,
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chartStacked"), options);
// chart.render();

// /// area chart

// var options = {
//   series: [
//     {
//       name: "series1",
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//     {
//       name: "series2",
//       data: [11, 32, 45, 32, 34, 52, 41],
//     },
//   ],
//   chart: {
//     height: 350,
//     type: "area",
//   },
//   title: {
//     text: "Total Project",
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   xaxis: {
//     type: "datetime",
//     categories: [
//       "2018-09-19T00:00:00.000Z",
//       "2018-09-19T01:30:00.000Z",
//       "2018-09-19T02:30:00.000Z",
//       "2018-09-19T03:30:00.000Z",
//       "2018-09-19T04:30:00.000Z",
//       "2018-09-19T05:30:00.000Z",
//       "2018-09-19T06:30:00.000Z",
//     ],
//   },
//   tooltip: {
//     x: {
//       format: "dd/MM/yy HH:mm",
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chartArea"), options);
// chart.render();

// // stacked chart two
// var options = {
//   series: [
//     {
//       name: "PRODUCT A",
//       data: [44, 55, 41, 67, 22, 43, 21, 49],
//     },
//     {
//       name: "PRODUCT B",
//       data: [13, 23, 20, 8, 13, 27, 33, 12],
//     },
//     {
//       name: "PRODUCT C",
//       data: [11, 17, 15, 15, 21, 14, 15, 13],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//     stacked: true,
//     stackType: "100%",
//   },
//   title: {
//     text: "Package Risk Status",
//   },
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         legend: {
//           position: "bottom",
//           offsetX: -10,
//           offsetY: 0,
//         },
//       },
//     },
//   ],
//   xaxis: {
//     labels: {
//       rotate: -45,
//     },
//     categories: [
//       "2011 Q1",
//       "2011 Q2",
//       "2011 Q3",
//       "2011 Q4",
//       "2012 Q1",
//       "2012 Q2",
//       "2012 Q3",
//       "2012 Q4",
//     ],
//   },
//   fill: {
//     opacity: 1,
//   },
//   legend: {
//     position: "right",
//     offsetX: 0,
//     offsetY: 50,
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chartStackedTwo"), options);
// chart.render();

// // chart bar three

// var options = {
//   series: [
//     {
//       name: "Net Profit",
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//     },
//     {
//       name: "Revenue",
//       data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//     },
//     {
//       name: "Free Cash Flow",
//       data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//   },
//   title: {
//     text: "Bad hires as % of actives",
//   },
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "55%",
//       endingShape: "rounded",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: true,
//     width: 2,
//     colors: ["transparent"],
//   },
//   xaxis: {
//     categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
//   },
//   yaxis: {
//     title: {
//       text: "$ (thousands)",
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
//   tooltip: {
//     y: {
//       formatter: function (val) {
//         return "$ " + val + " thousands";
//       },
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chartBarThree"), options);
// chart.render();

// // horizontal chart bar

// var options = {
//   series: [
//     {
//       data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 350,
//   },
//   title: {
//     text: "Project's Social Benefit suppliers per Quadrant (Victoria)",
//   },
//   plotOptions: {
//     bar: {
//       borderRadius: 4,
//       horizontal: true,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   xaxis: {
//     categories: [
//       "South Korea",
//       "Canada",
//       "United Kingdom",
//       "Netherlands",
//       "Italy",
//       "France",
//       "Japan",
//       "United States",
//       "China",
//       "Germany",
//     ],
//   },
// };

// var chart = new ApexCharts(document.querySelector("#chartBarX"), options);
// chart.render();

// // char pie one
// var options = {
//   series: [44, 55, 13, 43, 22],
//   chart: {
//     width: 380,
//     type: "pie",
//   },
//   title: {
//     text: "Total Priority Group (FTE) Contribution Status from Social Benefit Suppliers",
//   },
//   labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200,
//         },
//         legend: {
//           position: "bottom",
//         },
//       },
//     },
//   ],
// };

// var chart = new ApexCharts(document.querySelector("#chartPieOne"), options);
// chart.render();

// // char pie two
// var options = {
//   series: [44, 55, 13, 43, 22],
//   chart: {
//     width: 380,
//     type: "pie",
//   },
//   title: {
//     text: "Active employee count",
//   },
//   labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         chart: {
//           width: 200,
//         },
//         legend: {
//           position: "bottom",
//         },
//       },
//     },
//   ],
// };

// var chart = new ApexCharts(document.querySelector("#chartPieTwo"), options);
// chart.render();

// radial chart
var options = {
  series: [44, 55, 67, 83],
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px",
        },
        value: {
          fontSize: "16px",
        },
        total: {
          show: true,
          label: "Total",
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 249;
          },
        },
      },
    },
  },
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "top",
    // horizontalAlign: "left",
    floating: false,
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
      colors: ["#878787"],
      useSeriesColors: false,
    },
    markers: {
      width: 20,
      height: 20,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 3,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },
  labels: ["Low", "Medium", "High", "On Track"],
};

var chart = new ApexCharts(document.querySelector("#chartRadial"), options);
chart.render();

// <---- Total Project Social Suppliers Chart ----->
var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
  },

  colors: ["#00BC8B", "#037BFF", "#FF49ED"],

  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "top",
    // horizontalAlign: "left",
    floating: false,
    fontSize: "16px",
    fontFamily: "Poppins",
    fontWeight: 400,
    formatter: undefined,
    inverseOrder: false,
    width: undefined,
    height: undefined,
    tooltipHoverFormatter: undefined,
    customLegendItems: [],
    offsetX: 0,
    offsetY: 0,
    labels: {
      colors: ["#878787"],
      useSeriesColors: false,
    },
    markers: {
      width: 20,
      height: 20,
      strokeWidth: 0,
      strokeColor: "#fff",
      fillColors: undefined,
      radius: 3,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#chartThreeColumn"),
  options
);
chart.render();
