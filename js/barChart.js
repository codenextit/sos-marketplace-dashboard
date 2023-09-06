// Contractor Spend Status Chart
var options = {
  series: [
    {
      name: "PRODUCT A",
      data: [
        15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15,
        15, 15, 18, 15, 17, 15, 15, 15, 18, 15, 17, 15, 16, 15, 15, 15, 18, 15,
        17, 15, 16, 15,
      ],
    },
    {
      name: "PRODUCT B",
      data: [
        7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 12, 7,
        7, 12, 7, 7, 12, 7, 7, 12, 7, 7, 7, 7, 12, 7, 7, 12, 7, 7,
      ],
    },
    {
      name: "PRODUCT C",
      data: [
        16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22,
        16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 22, 16, 16, 16, 16, 22, 16,
        16, 22, 16, 16,
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
      "Facade - Aluminium",
      "Floor substrate",
      "First Aid and Spill Kits",
      "Door hardware",
      "External Cladding",
      "Windows and Glazing",
      "Roofing",
      "Partitions and linings",
      "Wall Finishes Tiling",
      "Vinyl and Carpet Flooring",
      "Blinds and Fly Screens",
      "Signage",
      "External Cladding",
      "Windows and Glazing",
      "Roofing",
      "Partitions and linings",
      "Wall Finishes Tiling",
      "Vinyl and Carpet Flooring",
      "Blinds and Fly Screens",
      "Signage",
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
  document.querySelector("#constractorChart"),
  options
);
chart.render();

// Risk and target status Bar Chart
var options = {
  series: [
    {
      data: [
        92, 12, 35, 75, 88, 11, 72, 18, 80, 92, 12, 35, 75, 88, 11, 72, 18, 80,
        92, 12, 35, 75, 88, 11, 72, 18, 80, 75, 88, 11, 72, 18,
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
      "Facade - Aluminium",
      "Floor substrate",
      "First Aid and Spill Kits",
      "Door hardware",
      "External Cladding",
      "Windows and Glazing",
      "Roofing",
      "Partitions and linings",
      "Wall Finishes Tiling",
      "Vinyl and Carpet Flooring",
      "Blinds and Fly Screens",
      "Signage",
    ],

    labels: {
      style: {
        fontSize: "12px",
      },
      rotate: -90,
    },
  },
};

var chart = new ApexCharts(document.querySelector("#riskChart"), options);
chart.render();
