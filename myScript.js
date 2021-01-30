// First Class(fc) ticket increase situation
document
  .getElementById("fc-ticket-plus")
  .addEventListener("click", function () {
    similarTotalCost("ticket-price", true);
    totalPrice();
  });
// First Class(fc) decrease situation
document
  .getElementById("fc-ticket-minus")
  .addEventListener("click", function () {
    similarTotalCost("ticket-price", false);
    totalPrice();
  });
//economy ticket increase situation
document
  .getElementById("economy-ticket-plus")
  .addEventListener("click", function () {
    similarTotalCost("economy-ticket-price", true);
    totalPrice();
  });
// economy ticket decrease situation
document
  .getElementById("economy-ticket-minus")
  .addEventListener("click", function () {
    similarTotalCost("economy-ticket-price", false);
    totalPrice();
  });

// total price function (step-1)
function similarTotalCost(valueToMinus, noToAdd) {
  const ticketFirstClass = document.getElementById(valueToMinus).value;
  const numberOfTicket = parseFloat(ticketFirstClass);
  if (noToAdd == true) {
    const newTicket = numberOfTicket + 1;
    document.getElementById(valueToMinus).value = newTicket;
  } else if (noToAdd == false && numberOfTicket > 0) {
    const newTicket = numberOfTicket - 1;
    document.getElementById(valueToMinus).value = newTicket;
  }
}
// total price calculation (step-2)
function totalPrice() {
  const ticketFirstClass = document.getElementById("ticket-price").value;
  const ticketFirstClassTotal = parseFloat(ticketFirstClass);
  const eTicketCost = document.getElementById("economy-ticket-price").value;
  const economyTicketTotal = parseFloat(eTicketCost);
  const totalPrice = 150 * ticketFirstClassTotal + 100 * economyTicketTotal;
  document.getElementById("sub-price").innerText = totalPrice;
  //10% vat calculation
  const vat = totalPrice * 0.1;
  document.getElementById("vat").innerText = vat;
  const costTotal = totalPrice + vat;
  document.getElementById("total-price").innerText = costTotal;
  document.getElementById("cartCostTotal").innerText = costTotal;
}
// "Book Now" button summary
document
  .getElementById("book-btn-cart-view")
  .addEventListener("click", function () {
    document.getElementById("key-area").style.display = "none";
    document.getElementById("finalCartView").style.display = "block";
  });
// confirmation summary display
document.getElementById("finalSubmit").addEventListener("click", function () {
  document.getElementById("finalCartView").style.display = "none";
  document.getElementById("hero-area").style.display = "block";
  document.getElementById("key-area").style.display = "block";
});
