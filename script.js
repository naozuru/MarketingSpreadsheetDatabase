const apiUrl =
  "https://script.google.com/macros/s/AKfycbw7WZByTl1Q2mEXxR2wh7KIZ8HhURY3AuvwBet2ShF7CoKNQn0NR0XEQHPGAtFr-p9YKw/exec"; // Ganti dengan URL Google Apps Script

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("data-penjualan");
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td scope="row">${item.id}</td>
            <td scope="row">${item.nama}</td>
            <td scope="row">${item.harga}</td>
          `;
      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
