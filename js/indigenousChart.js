// Project Indigenous Inclusion Risk Levels
var options = {
  series: [78, 70, 55, 60, 50],
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
  colors: ["#144492", "#00B050", "#F3BE00", "#00B050", "#FF0000"],
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
  document.querySelector("#indigenousProjectRiskChart"),
  options
);
chart.render();

// <---- Total Project Number of Indigenous Businesses ----->
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

var chart = new ApexCharts(
  document.querySelector("#indigenousSuppliersChart"),
  options
);
chart.render();

// Contractor Spend Status Chart
var options = {
  series: [
    {
      name: "PRODUCT A",
      data: [
        15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15,
        15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15, 16, 15, 15, 15, 18, 15,
        15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15,
        15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15, 16, 15, 15, 15, 18, 15,
      ],
    },
    {
      name: "PRODUCT B",
      data: [
        7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7,
        7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12,
        7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7,
        7, 7, 12, 7, 7, 12,
      ],
    },
    {
      name: "PRODUCT C",
      data: [
        16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22,
        16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 16, 16, 22, 16,
        16, 22, 16, 16, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16,
        22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16,
      ],
    },
  ],
  chart: {
    fontFamily: "Poppins",
    type: "bar",
    height: 450,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#964B00", "#FF5252", "#F3BE00"],
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      // barWidth: "80px",
      borderRadius: 0,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "13px",
            fontWeight: 900,
          },
        },
      },
    },
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
      "Transport",
      "Security",
      "Test and Tag",
      "Temporary Fence",
      "Site Equipment",
      "Wet Hire",
      "Scaffold & Props",
      "Generator Hire",
      "Builders clean",
      "Design",
      "Connections",
      "Workshop & T...",
      "Traffic Manage...",
      "Safety",
      "First aid & spi...",
      "civil works",
      "Inground services",
      "Structural Steel",
      "structure",
      "Brick & Blockwork",
      "Facade - Alum...",
      "Floor substrate",
      "First Aid and...",
      "Door hardware",
      "External Cladding",
      "Windows and G...",
      "Roofing",
      "Partitions and...",
      "Wall Finishes...",
      "Vinyl and Carpet Flooring",
      "Blinds and Fly...",
      "Signage",
      "External Cladd...",
      "Windows and Gl...",
      "Roofing",
      "Partitions and...",
      "Wall Finishes T...",
      "Vinyl and Carpet...",
      "Blinds and Fly...",
      "Signage",
      "Safety",
      "First Aid and Sp...",
      "Civil Works",
      "Inground Services",
      "Structural Steel",
      "Structure - F.R.P.",
      "Brick & Blockwo...",
      "Facade - Alumi...",
      "Floor Substrate",
      "First Aid and...",
      "Door Hardware",
      "External Cladding",
      "Windows and Gl...",
      "Roofing",
      "Partitions and...",
      "Wall Finishes T...",
      "Vinyl and Carp...",
      "Blinds and Fly...",
      "Signage",
      "Pinboards/Whit...",
      "Painting",
      "Joinery",
      "Shower Screens",
      "Hydraulic Servic... ",
      "Fittings, Fixtur...",
      "Electrical Serv...",
      "Substation",
      "Mechanical Serv...",
      "Fire Services",
      "Landscaping ...",
      "Landscaping & ...",
      "Asphalt and Ker...",
    ],
    scrollbar: {
      enabled: true, // Enable the scrollbar
      offsetY: -10, // Adjust the position of the scrollbar
    },
    labels: {
      style: {
        fontSize: "12px",
      },
      rotate: -90,
    },
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
};

var chart = new ApexCharts(
  document.querySelector("#indigenousConstractorChart"),
  options
);
chart.render();

// indigenous pie chart
var options = {
  series: [20, 20, 15, 10, 20, 15],
  chart: {
    width: "50%",
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
      breakpoint: 1600,
      options: {
        chart: {
          width: 280,
        },
        legend: {
          position: "bottom",
        },
      },
    },
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
  document.querySelector("#indigenousChartPie"),
  options
);
chart.render();

// Indigenous Training type Pie Chart
var options = {
  series: [20, 20, 20, 40],
  chart: {
    width: "100%",
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
      breakpoint: 1600,
      options: {
        chart: {
          width: 280,
        },
        legend: {
          position: "bottom",
        },
      },
    },
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
  document.querySelector("#indigenousTrainingChartPie"),
  options
);
chart.render();

// Indigenous Employment type Pie Chart
var options = {
  series: [100, 100, 50, 200],
  chart: {
    width: "100%",
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
      breakpoint: 1600,
      options: {
        chart: {
          width: 280,
        },
        legend: {
          position: "bottom",
        },
      },
    },
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
  document.querySelector("#indigenousEmploymentChartPie"),
  options
);
chart.render();

// Risk and target status Bar Chart
var options = {
  series: [
    {
      data: [
        92, 12, 35, 75, 88, 11, 72, 18, 80, 92, 12, 35, 75, 88, 11, 72, 18, 80,
        92, 12, 35, 75, 88, 11, 72, 18, 80, 75, 88, 11, 72, 18, 92, 12, 35, 75,
        88, 11, 72, 18, 80, 92, 12, 35, 75, 88, 11, 72, 18, 80, 92, 12, 35, 75,
        88, 11, 72, 18, 80, 75, 88, 11, 12, 35, 75, 88, 11, 72, 18, 80, 75, 88,
      ],
    },
  ],

  chart: {
    fontFamily: "Poppins",
    height: 450,
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
    show: false,
  },

  colors: ["#144492", "#00B050", "#FD4802", "#F3BE00"],
  plotOptions: {
    bar: {
      columnWidth: "65%",
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

  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "%";
      },
    },
  },

  xaxis: {
    categories: [
      "Transport",
      "Security",
      "Test and Tag",
      "Temporary Fence",
      "Site Equipment",
      "Wet Hire",
      "Scaffold & Props",
      "Generator Hire",
      "Builders clean",
      "Design",
      "Connections",
      "Workshop & T...",
      "Traffic Manage...",
      "Safety",
      "First aid & spill kits",
      "civil works",
      "Inground services",
      "Structural Steel",
      "structure",
      "Brick & Blockwork",
      "Facade - Alum...",
      "Floor substrate",
      "First Aid and...",
      "Door hardware",
      "External Cladding",
      "Windows and G...",
      "Roofing",
      "Partitions and...",
      "Wall Finishes...",
      "Vinyl and Car...",
      "Blinds and Fly...",
      "Signage",
      "External Cladd...",
      "Windows and Gl...",
      "Roofing",
      "Partitions and...",
      "Wall Finishes T...",
      "Vinyl and Carpet...",
      "Blinds and Fly...",
      "Signage",
      "Safety",
      "First Aid and Sp...",
      "Civil Works",
      "Inground Services",
      "Structural Steel",
      "Structure - F.R.P.",
      "Brick & Blockwo...",
      "Facade - Alumi...",
      "Floor Substrate",
      "First Aid and...",
      "Door Hardware",
      "External Cladding",
      "Windows and Gl...",
      "Roofing",
      "Partitions and...",
      "Wall Finishes T...",
      "Vinyl and Carp...",
      "Blinds and Fly...",
      "Signage",
      "Pinboards/Whi...",
      "Painting",
      "Joinery",
      "Shower Screens",
      "Hydraulic Servic... ",
      "Fittings, Fixtur...",
      "Electrical Serv...",
      "Substation",
      "Mechanical Serv...",
      "Fire Services",
      "Landscaping ...",
      "Landscaping & ...",
      "Asphalt and Ke...",
    ],

    labels: {
      style: {
        fontSize: "12px",
      },
      rotate: -90,
    },
  },
};

var chart = new ApexCharts(
  document.querySelector("#indigenousRiskChart"),
  options
);
chart.render();
