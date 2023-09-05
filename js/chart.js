// Project Risk Levels chart
// var options = {
//   series: [76, 67, 61, 50],
//   chart: {
//     height: 390,
//     type: "radialBar",
//   },

//   plotOptions: {
//     radialBar: {
//       offsetY: 0,
//       startAngle: 0,
//       endAngle: 270,
//       hollow: {
//         margin: 5,
//         size: "25%",
//         background: "transparent",
//         image: undefined,
//       },
//       dataLabels: {
//         name: {
//           show: false,
//         },
//         value: {
//           show: false,
//         },
//       },
// track: {
//   show: false,
// },
//     },
//   },
// colors: ["#144492", "#F3BE00", "#00B050", "#FF0000"],
//   labels: [
//     "Overall Status",
//     "Indigenous Business and Inclusion",
//     "Social Enterprise and Inclusion",
//     "Disability Social Enterprise and Inclusion",
//   ],
//   legend: {
//     show: true,
//     floating: true,
//     fontSize: "14px",
//     position: "top",
//     offsetX: 50,
//     offsetY: 0,
//     labels: {
//       useSeriesColors: false,
//     },
//     markers: {
//       size: 0,
//       width: 0,
//       height: 0,
//     },
//     formatter: function (seriesName, opts) {
//       return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
//     },
//     itemMargin: {
//       vertical: 4,
//     },
//   },
//   responsive: [
//     {
//       breakpoint: 480,
//       options: {
//         legend: {
//           show: false,
//         },
//       },
//     },
//   ],
// };

// var chart = new ApexCharts(
//   document.querySelector("#projectRiskChart"),
//   options
// );
// chart.render();

var options = {
  series: [76, 55, 68, 50],
  chart: {
    height: 370,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "30%",
        background: "#F3BE00",
        image: undefined,
      },
      dataLabels: {
        name: {
          show: true,
        },
        value: {
          show: false,
        },
        total: {
          show: true,
          label: "Medium Risk",
          color: "#000",
          fontSize: "15px",
        },
      },
      track: {
        show: false,
      },
      stroke: {
        show: false,
      },
    },
  },
  colors: ["#144492", "#F3BE00", "#00B050", "#FF0000"],
  labels: [
    "Overall Status",
    "Indigenous Business and Inclusion",
    "Social Enterprise and Inclusion",
    "Disability Social Enterprise and Inclusion",
  ],
  legend: {
    show: true,
    floating: true,
    fontSize: "14px",
    position: "left",
    offsetX: 0,
    offsetY: 13,
    labels: {
      colors: "#878787",
      useSeriesColors: false,
    },
    markers: {
      size: 0,
      width: 0,
      height: 0,
    },
    itemMargin: {
      vertical: 3,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          show: false,
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#projectRiskChart"),
  options
);
chart.render();

// <---- Total Project Social Suppliers Chart ----->
var options = {
  series: [
    {
      name: "Net Profit",
      data: [25, 35, 45, 55, 65, 75, 85, 95, 75],
    },
    {
      name: "Revenue",
      data: [20, 30, 40, 50, 60, 70, 80, 90, 70],
    },
    {
      name: "Free Cash Flow",
      data: [15, 25, 35, 45, 55, 65, 75, 85, 65],
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
    show: false,
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

var chart = new ApexCharts(document.querySelector("#suppliersChart"), options);
chart.render();
