// social contribution chart 1
var options = {
  series: [65],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#00B0F0"],
};

var chart = new ApexCharts(
  document.querySelector("#socialContributionChart"),
  options
);
chart.render();

// Policy Compliance Chart 1
var options = {
  series: [87],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#FC7E14"],
};

var chart = new ApexCharts(
  document.querySelector("#policyComplianceChart"),
  options
);
chart.render();

// Workforce Duty Chart
var options = {
  series: [79],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#70AD47"],
};

var chart = new ApexCharts(
  document.querySelector("#workforceDutyChart"),
  options
);
chart.render();

// Environment Compliance Chart 1
var options = {
  series: [5],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#980090"],
};

var chart = new ApexCharts(
  document.querySelector("#environmentComplianceChart"),
  options
);
chart.render();

// Modern Slavery Chart 1
var options = {
  series: [5],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#000091"],
};

var chart = new ApexCharts(
  document.querySelector("#modernSlaveryChart"),
  options
);
chart.render();

// Workforce-Duty of Care Chart

var options = {
  series: [65],
  chart: {
    width: "130%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#00B0F0"],
};

var chart = new ApexCharts(
  document.querySelector("#socialContributionChart3"),
  options
);
chart.render();

// social contribution chart 3
var options = {
  series: [65],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#00B0F0"],
};

var chart = new ApexCharts(
  document.querySelector("#socialContributionChart3"),
  options
);
chart.render();

// Policy Compliance Chart 3
var options = {
  series: [87],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#FC7E14"],
};

var chart = new ApexCharts(
  document.querySelector("#policyComplianceChart3"),
  options
);
chart.render();

// Workforce Duty Chart 3
var options = {
  series: [79],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#70AD47"],
};

var chart = new ApexCharts(
  document.querySelector("#workforceDutyChart3"),
  options
);
chart.render();

// Environment Compliance Chart 3
var options = {
  series: [5],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#980090"],
};

var chart = new ApexCharts(
  document.querySelector("#environmentComplianceChart3"),
  options
);
chart.render();

// Modern Slavery Chart 3
var options = {
  series: [5],
  chart: {
    width: "100%",
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      startAngle: 0,
      endAngle: 360,
      offsetX: 0,
      offsetY: 0,
      hollow: {
        margin: 5,
        size: "50%",
        background: "transparent",
        image: undefined,
        imageWidth: 150,
        imageHeight: 150,
        imageOffsetX: 0,
        imageOffsetY: 0,
        imageClipped: true,
        position: "front",
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      track: {
        show: true,
        startAngle: undefined,
        endAngle: undefined,
        background: "#f2f2f2",
        strokeWidth: "97%",
        opacity: 1,
        margin: 5,
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      dataLabels: {
        show: true,
        name: {
          show: false,
        },
        value: {
          show: true,
          fontSize: "18px",
          fontFamily: "Poppins",
          fontWeight: 700,
          color: "#000000b3",
          offsetY: 5,
          formatter: function (val) {
            return val + "%";
          },
        },
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          fontSize: "20px",
          fontFamily: "Poppins",
          fontWeight: 700,
          formatter: function (w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          },
        },
      },
    },
  },
  labels: ["Cricket"],
  colors: ["#000091"],
};

var chart = new ApexCharts(
  document.querySelector("#modernSlaveryChart3"),
  options
);
chart.render();

// Risk Rating Status Chart

var options = {
  series: [20, 5],
  chart: {
    type: "donut",
  },
  legend: {
    show: false,
  },
  colors: ["#FF0000", "#144492"],
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
  document.querySelector("#modernSlaveryRiskChart"),
  options
);
chart.render();
