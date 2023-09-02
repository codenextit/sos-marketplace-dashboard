// pie chart
var options = {
  series: [40, 20, 8, 8, 8, 8],
  chart: {
    width: 620,
    type: "pie",
  },
  labels: [
    "Youth 16-24",
    "Mature aged",
    "Ex justice",
    "Asylum seeker/refugees",
    "Long term unemployed",
    "LGBTQI+",
  ],
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "right",
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
    customLegendItems: ["Hello"],
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

var chart = new ApexCharts(document.querySelector("#chartPie"), options);
chart.render();
