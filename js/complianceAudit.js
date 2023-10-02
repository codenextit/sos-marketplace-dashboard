// social contribution chart
var options = {
  series: [20],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#00B0F0"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "25px",
            fontFamily: "Poppins",
            color: "#000000b3",
            fontWeight: 600,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: true,
          },
        },
        size: "70%",
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
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
  document.querySelector("#socialContributionChart"),
  options
);
chart.render();

// Policy Compliance Chart
var options = {
  series: [20],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#00B0F0"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "25px",
            fontFamily: "Poppins",
            color: "#000000b3",
            fontWeight: 600,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: true,
          },
        },
        size: "70%",
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
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
  document.querySelector("#policyComplianceChart"),
  options
);
chart.render();

// Workforce Duty Chart
var options = {
  series: [20],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#00B0F0"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "25px",
            fontFamily: "Poppins",
            color: "#000000b3",
            fontWeight: 600,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: true,
          },
        },
        size: "70%",
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
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
  document.querySelector("#workforceDutyChart"),
  options
);
chart.render();

// Environment Compliance Chart
var options = {
  series: [20],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#00B0F0"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "25px",
            fontFamily: "Poppins",
            color: "#000000b3",
            fontWeight: 600,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: true,
          },
        },
        size: "70%",
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
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
  document.querySelector("#environmentComplianceChart"),
  options
);
chart.render();

// Modern Slavery Chart
var options = {
  series: [20],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#00B0F0"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: false,
          },
          value: {
            show: true,
            fontSize: "25px",
            fontFamily: "Poppins",
            color: "#000000b3",
            fontWeight: 600,
            formatter: function (val) {
              return val + "%";
            },
          },
          total: {
            show: true,
          },
        },
        size: "70%",
      },
    },
  },
  stroke: {
    show: false,
    width: 0,
    colors: ["transparent"],
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
  document.querySelector("#modernSlaveryChart"),
  options
);
chart.render();
