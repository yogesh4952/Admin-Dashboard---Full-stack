const ctx = document.getElementById("lineChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
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
    datasets: [
      {
        label: "Earning in $ ",
        data: [
          2050, 1900, 2100, 2144, 1800, 1200, 1600, 2500, 2700, 2400, 2100,
        ],
        backgroundColor: ["rgba(85,85,85,1)"],
        borderColor: ["rgb(41,155,99)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
