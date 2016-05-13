

  var link = document.querySelector(".js-contact");
  var popup = document.querySelector(".modal-content-index");
  var popupBuy = document.querySelector(".modal-content-catalog");
  var close = popup.querySelector(".modal-content-close");
  var closeBuy = popupBuy.querySelector(".modal-content-close-buy");
  var form = popup.querySelector("form");
  var nameUser = popup.querySelector("[name=name]");
  var emailUser = popup.querySelector("[name=email]");
  var reviewUser = popup.querySelector("[name=review]");

  var storageName = localStorage.getItem("nameUser");
  var storageEmail = localStorage.getItem("emailUser");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-index-show");
    // console.log(storageName);
    // console.log(storageEmail);
    // console.log(emailUser);

    //дёргается попап из-за стореджа
    if (storageName) {
      nameUser.value = storageName;
      emailUser.focus();
    } else {
      nameUser.focus()
    }
    if (storageEmail) {
      emailUser.value = storageEmail;
      if (storageName) {
          reviewUser.focus();
      } else {
        nameUser.focus();
      }
    } else {
      emailUser.focus()
    }
  });
    closeBuy.addEventListener("click", function(event) {
       event.preventDefault();
       popupBuy.classList.remove("modal-content-catalog-show");
     });

     close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-index-show");
        popup.classList.remove("modal-error");
      });


  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-index-show")) {
        popup.classList.remove("modal-content-index-show");
        popup.classList.remove("modal-error");
      }
    }
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // console.log(nameUser.value); //для проверки
    // console.log(emailUser.value);
    // console.log(reviewUser.value);
     if (!nameUser.value || !emailUser.value || !reviewUser.value) {
       event.preventDefault();
       popup.classList.remove("modal-error");
       popup.offsetWidth = popup.offsetWidth;
       popup.classList.add("modal-error");
      //  console.log("Нужно ввести имя, имейл и текст письма"); //для проверки
     }
     else {
        localStorage.setItem("name", nameUser.value);
        localStorage.setItem("email", emailUser.value);
      }
   });


  var linksBuy = document.querySelectorAll(".buy");
  for (var i = 0; i < linksBuy.length; i++) {
    linksBuy[i].addEventListener("click", function(event) {
      event.preventDefault();
      console.log("да");
      popupBuy.classList.add("modal-content-catalog-show");
    });
  }


  var mapOpen = document.querySelector(".js-open-map");
  var mapPopup = document.querySelector(".modal-content-map");
  var mapClose = mapPopup.querySelector(".modal-content-closemap");
  //
  mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("modal-content-map-show");
  });

  mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("modal-content-map-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopup.classList.contains("modal-content-map-show")) {
        mapPopup.classList.remove("modal-content-map-show");
      }
    }
  });
