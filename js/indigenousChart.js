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
  document.querySelector("#indigenousProjectRiskChart"),
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
  colors: ["#00BC8B", "#037BFF", "#FF49ED"],
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

// pie chart
var options = {
  series: [8, 7, 5, 8, 10, 15, 10, 7, 13, 5, 8, 4],
  chart: {
    width: 420,
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
    "Aboriginal & Torres Strait Islanders",
    "Women",
    "People living with a disability",
    "Entrenched disadvantage",
    "Women escaping violence",
    "New migrants",
  ],
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
  },
  colors: [
    "#FF5438",
    "#000091",
    "#980090",
    "#FF9F51",
    "#A1DAE8",
    "#FFBDCB",
    "#FF787C",
    "#82E200",
    "#00C3FF",
    "#8D0085",
    "#00FFFF",
    "#A627D3",
  ],
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
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
