// chart bar one
var options = {
  series: [
    {
      data: [
        48, 22, 10, 28, 16, 21, 13, 30, 20, 28, 40, 18, 34, 28, 34, 45, 22, 32,
        37, 25,
      ],
    },
  ],
  chart: {
    height: 350,
    type: "bar",
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      },
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#F3BE00", "#00BC8B", "#037BFF", "#FD4802"],
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return "$" + value + "k";
      },
    },
  },
  xaxis: {
    categories: [
      "...Transport",
      "...Security",
      "...test and tag",
      "...Temporary Fence",
      "...Site Equipment",
      "...Wet Hire",
      "...Scaffold & Props",
      "...Generator Hire",
      "...Builders clean",
      "...Design",
      "...Connections",
      "...Workshop & Tool Costs",
      "...Traffic Management",
      "...Safety",
      "...First aid & spill kits",
      "...civil works",
      "...Inground services",
      "...Structural Steel",
      "...structure",
      "...Brick & Blockwork",
    ],
    labels: {
      style: {
        fontSize: "12px",
      },
      rotate: -90,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chartBarOne"), options);
chart.render();

// Risk and target status Bar Chart
var options = {
  series: [
    {
      data: [
        48, 22, 10, 28, 16, 21, 13, 30, 20, 28, 40, 18, 34, 28, 34, 45, 22, 32,
        37, 25,
      ],
      name: ["Low"],
    },
    {
      data: [
        48, 22, 10, 28, 16, 21, 13, 30, 20, 28, 40, 18, 34, 28, 34, 45, 22, 32,
        37, 25,
      ],
      name: ["Medium"],
    },
    {
      data: [
        48, 22, 10, 28, 16, 21, 13, 30, 20, 28, 40, 18, 34, 28, 34, 45, 22, 32,
        37, 25,
      ],
      name: ["High"],
    },
    {
      data: [
        48, 22, 10, 28, 16, 21, 13, 30, 20, 28, 40, 18, 34, 28, 34, 45, 22, 32,
        37, 25,
      ],
      name: ["Targeted Audience"],
    },
  ],

  chart: {
    height: 350,
    type: "bar",
    eevents: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      },
    },
    toolbar: {
      show: false,
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
    customLegendItems: ["Low", "Medium", "High", "Targeted Audience"],
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

  colors: ["#F3BE00", "#00BC8B", "#037BFF", "#FD4802"],
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },

  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },

  xaxis: {
    categories: [
      "Transport",
      "Security",
      "test and tag",
      "Temporary Fence",
      "Site Equipment",
      "Wet Hire",
      "Scaffold & Props",
      "Generator Hire",
      "Builders clean",
      "Design",
      "Connections",
      "Workshop & Tool Costs",
      "Traffic Management",
      "Safety",
      "First aid & spill kits",
      "civil works",
      "Inground services",
      "Structural Steel",
      "structure",
      "Brick & Blockwork",
    ],
    labels: {
      style: {
        fontSize: "12px",
      },
      rotate: -90,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chartBarTwo"), options);
chart.render();
