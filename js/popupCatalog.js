

  var popupBuy = document.querySelector(".modal-content-catalog");
  var linksBuy = document.querySelectorAll(".buy");
  var closeBuy = popupBuy.querySelector(".modal-content-close-buy");
  var continueBuy = popupBuy.querySelector(".btn-continue");

  for (var i = 0; i < linksBuy.length; i++) {
    linksBuy[i].addEventListener("click", function(event) {
      event.preventDefault();
      console.log("да");
      popupBuy.classList.add("modal-content-catalog-show");
    });
  }

  closeBuy.addEventListener("click", function(event) {
    event.preventDefault();
      popupBuy.classList.remove("modal-content-catalog-show");
  });

  continueBuy.addEventListener("click", function(event) {
    event.preventDefault();
      popupBuy.classList.remove("modal-content-catalog-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-catalog-show")) {
        popup.classList.remove("modal-content-catalog-show");
      }
    }
  });
