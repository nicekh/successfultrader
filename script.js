function searchStock() {
    let stockSymbol = document.getElementById("stockSearch").value.toUpperCase();
    let stockContainer = document.getElementById("stockContainer");

    if (stockSymbol) {
        // Example Static Data (Replace with API Call)
        let stockPrice = Math.floor(Math.random() * 2000) + 100; // Random stock price
        stockContainer.innerHTML = <h3>${stockSymbol} : $${stockPrice}</h3>;
    } else {
        stockContainer.innerHTML = "<p>Please enter a stock symbol.</p>";
    }
}
