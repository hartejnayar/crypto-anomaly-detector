let allData = [];
let currentSort = { column: null, asc: true };

fetch("./data/anomaly_results.json")
  .then(res => res.json())
  .then(data => {
    allData = data;
    renderTable();
    renderChart();
  });

function renderTable() {
  const searchValue = document.getElementById("search-box").value.toLowerCase();
  let filteredData = allData.filter(tx =>
    tx.hash.toLowerCase().includes(searchValue) ||
    tx.from.toLowerCase().includes(searchValue)
  );

  if (currentSort.column) {
    filteredData.sort((a, b) => {
      let valA = a[currentSort.column];
      let valB = b[currentSort.column];
      if (typeof valA === "string") valA = valA.toLowerCase();
      if (typeof valB === "string") valB = valB.toLowerCase();
      return currentSort.asc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
    });
  }

  const tableBody = document.querySelector("#data-table tbody");
  tableBody.innerHTML = "";

  filteredData.forEach(tx => {
    const date = tx.timeStamp ? new Date(tx.timeStamp).toLocaleString() : "N/A";
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${tx.hash.substring(0, 10)}...</td>
      <td>${tx.from.substring(0, 10)}...</td>
      <td>${date}</td>
      <td>${tx.anomaly === 1 ? " Suspicious" : " Normal"}</td>
    `;
    tableBody.appendChild(row);
  });
}

function renderChart() {
  const normalCount = allData.filter(tx => tx.anomaly === 0).length;
  const anomalyCount = allData.filter(tx => tx.anomaly === 1).length;

  Plotly.newPlot("chart", [{
    values: [normalCount, anomalyCount],
    labels: ["Normal", "Suspicious"],
    type: "pie",
    marker: { colors: ["#4CAF50", "#E74C3C"] },
    textinfo: "label+percent"
  }], { title: "Normal vs Suspicious Transactions" });
}

document.getElementById("search-box").addEventListener("input", () => renderTable());

document.querySelectorAll("th").forEach(th => {
  th.addEventListener("click", () => {
    const column = th.dataset.column;
    if (currentSort.column === column) {
      currentSort.asc = !currentSort.asc;
    } else {
      currentSort = { column, asc: true };
    }
    renderTable();
  });
});
