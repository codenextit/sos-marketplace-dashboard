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
        background: "#F3BE00",
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
          label: ["Medium"],
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
  document.querySelector("#projectRiskChart"),
  options
);
chart.render();

// <---- Total Project Social Suppliers Chart ----->
var options = {
  series: [
    {
      name: "Net Profit",
      type: "column",
      data: [25, 35, 45, 55, 65, 75, 85, 95, 75],
    },
    {
      name: "Revenue",
      type: "column",
      data: [20, 30, 40, 50, 60, 70, 80, 90, 70],
    },
    {
      name: "Free Cash Flow",
      type: "column",
      data: [15, 25, 35, 45, 55, 65, 75, 85, 65],
    },
    {
      name: "01",
      type: "line",
      data: [15, 28, 35, 45, 60, 65, 75, 80, 70],
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
  colors: ["#00BC8B", "#037BFF", "#FF49ED", "#FD4802"],

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
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    title: {
      text: "",
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
