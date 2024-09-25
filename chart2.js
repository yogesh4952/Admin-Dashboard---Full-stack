document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("doughnut").getContext("2d");

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Academic", "Non-academic", "Administration", "Others"],
      datasets: [
        {
          label: "Employees",
          data: [14, 32, 65, 51],
          backgroundColor: [
            "rgba(41,155,99,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
            "rgba(120,46,139,1)",
          ],
          borderColor: [
            "rgba(41,155,99,1)",
            "rgba(54,162,235,1)",
            "rgba(255,206,86,1)",
            "rgba(120,46,139,1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
});
