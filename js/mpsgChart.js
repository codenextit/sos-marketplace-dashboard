// Project Risk Levels chart
var options = {
  series: [76, 55, 68, 50],
  chart: {
    height: 370,
    type: "radialBar",
    fontFamily: "Poppins",
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "30%",
        background: "#FF0000",
        image: undefined,
      },
      dataLabels: {
        name: {
          show: true,
          color: "#000000",
        },
        value: {
          show: false,
        },
        total: {
          show: true,
          label: ["High"],
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
  colors: ["#144492", "#F3BE00", "#00B050", "#000000"],
  labels: ["Completion", "Medium", "Low", "High"],
  legend: {
    show: false,
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
  document.querySelector("#mpsgProjectRiskChart"),
  options
);
chart.render();

// <---- Total Project Social Suppliers Chart ----->
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [55, 30, 38, 23, 30, 38, 30, 25, 38],
    },
    {
      name: "Revenue",
      type: "column",
      data: [20, 15, 13, 18, 12, 15, 12, 18, 14],
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [8, 5, 4, 5, 3, 6, 7, 4, 6],
    },
    {
      name: "01",
      type: "line",
      data: [55, 30, 38, 23, 30, 38, 30, 25, 38],
      color: "#FD4802",
    },
  ],
  chart: {
    height: 380,
    type: "line",
    stacked: false,
    toolbar: false,
    fontFamily: "Poppins",
  },
  stroke: {
    width: [5, 5],
    curve: "smooth",
  },
  colors: ["#F3BE00", "#964B00", "#FF5252", "#FD4802"],

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

var chart = new ApexCharts(
  document.querySelector("#mpsgSuppliersChart"),
  options
);
chart.render();

// Major Project Skills Guarantee Workforce Hours Chart
var options = {
  series: [
    {
      data: [
        {
          x: "Retained",
          y: 218,
        },
        {
          x: "Standard",
          y: 149,
        },
        {
          x: "Apprentice",
          y: 184,
        },
        {
          x: "Intern",
          y: 55,
        },
        {
          x: "Trained",
          y: 84,
        },
        {
          x: "New",
          y: 31,
        },
        {
          x: "Cadet",
          y: 70,
        },
        {
          x: "Social",
          y: 30,
        },
        {
          x: "Employee",
          y: 44,
        },
        {
          x: "Disability",
          y: 68,
        },
        {
          x: "Overall",
          y: 28,
        },
        {
          x: "Other",
          y: 19,
        },
        {
          x: "Business",
          y: 29,
        },
      ],
    },
  ],
  legend: {
    show: false,
  },
  chart: {
    height: 550,
    type: "treemap",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    treemap: {
      colorScale: {
        ranges: [
          {
            from: -6,
            to: -2, // Blue color range
            color: "#0074D9", // Regular Blue
          },
          {
            from: -2.001, // Adjust the starting point for sky blue
            to: 2, // Ending point for sky blue
            color: "#52B12C", // Sky Blue
          },
          {
            from: 2.001, // Pink color range
            to: 6,
            color: "#FF49ED", // Pink
          },
        ],
      },
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#mpsgMajorProjectChart"),
  options
);
chart.render();

// indigenous pie chart
var options = {
  series: [20, 20, 15, 10, 20, 15],
  chart: {
    width: 300,
    type: "pie",
    fontFamily: "Poppins",
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "%";
    },
  },

  labels: [
    "Youth 16-24",
    "Mature aged",
    "Ex justice",
    "Asylum seeker/refugees",
    "Long term unemployed",
    "LGBTQI+",
  ],
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },
  colors: ["#FF5438", "#000091", "#980090", "#FF9F51", "#A1DAE8", "#FFBDCB"],
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 220,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#mpsgChartPie"), options);
chart.render();

// mpsg Training type Pie Chart
var options = {
  series: [20, 20, 20, 40],
  chart: {
    width: 300,
    type: "pie",
    fontFamily: "Poppins",
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + " " + "FTE";
    },
  },
  plotOptions: {
    pie: {
      offsetX: 0,
      offsetY: 0,
    },
  },

  labels: [
    "Youth 16-24",
    "Mature aged",
    "Ex justice",
    "Asylum seeker/refugees",
  ],
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },
  colors: ["#FF5438", "#000091", "#980090", "#FF9F51"],
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 220,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#mpsgTrainingChartPie"),
  options
);
chart.render();

// mpsg Employment type Pie Chart
var options = {
  series: [100, 100, 50, 200],
  chart: {
    width: 300,
    type: "pie",
    fontFamily: "Poppins",
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return Math.floor(val) + " FTE";
    },
  },
  plotOptions: {
    pie: {
      offsetX: 0,
      offsetY: 0,
    },
  },
  labels: [
    "Youth 16-24",
    "Mature aged",
    "Ex justice",
    "Asylum seeker/refugees",
  ],
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },
  colors: ["#FF5438", "#000091", "#980090", "#FF9F51"],
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
    formatter: function (val, opts) {
      return val.toFixed(2) + " FTE"; // Display original floating-point numbers in tooltips
    },
  },
  responsive: [
    {
      breakpoint: 1400,
      options: {
        chart: {
          width: 220,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(
  document.querySelector("#mpsgEmploymentChartPie"),
  options
);
chart.render();
