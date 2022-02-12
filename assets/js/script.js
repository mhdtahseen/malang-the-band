const achievementMore = document.querySelector(".achievements-more");

const showBtn = document.getElementById("achievement-btn-show");
const hideBtn = document.getElementById("achievement-btn-hide");

let displayImg = 1;

// console.log(achievementMore, showBtn);

// ACHIEVEMENTS SHOW / HIDE

document
  .getElementById("achievement-btn-show")
  .addEventListener("click", function () {
    //console.log("Know More Button Pressed");
    achievementMore.classList.toggle("hidden");
    showBtn.classList.toggle("hidden");
    hideBtn.classList.toggle("hidden");
  });

hideBtn.addEventListener("click", function () {
  showBtn.classList.toggle("hidden");
  achievementMore.classList.toggle("hidden");
  hideBtn.classList.toggle("hidden");
});

// MODAL CREW

$(".crew-card").click(function () {
  let info = "";
  let role = "";
  // $(".overlay").toggleClass("hidden");
  // $(".overlay").toggleClass("active");
  $(".overlay").removeClass("hide-modal");
  $(".overlay").addClass("show-modal");

  let name = $(this).find(".crew-name").text();

  $.getJSON("../assets/data/crew-details.json", function (data) {
    // console.log(data);
    $.each(data, function (key, value) {
      // console.log(value);
      // console.log(value.name);
      if (value.name === name) {
        // console.log(true);
        info = value.info;
        role = value.role;

        $("#crew-name").text(name);
        $("#crew-role").text(role);
        $("#crew-info").html(info);
        $("#crew-img-1").attr("src", value.img1);
        $("#crew-img-2").attr("src", value.img2);
        $("#crew-img-3").attr("src", value.img3);

        $("#crew-modal").ready(function () {
          displayImg = setInterval(function () {
            let currentImg = $(".modal-img-active");
            let nextImg = currentImg.next("img");

            if (nextImg.length != 0) {
              console.log(nextImg);
              currentImg.addClass("modal-img-inactive");
              currentImg.removeClass("modal-img-active");
              nextImg.addClass("modal-img-active");
            } else {
              $("#crew-img-3").removeClass("modal-img-active");
              $("#crew-img-3").addClass("modal-img-inactive");
              $("#crew-img-1").addClass("modal-img-active");
            }
          }, 3000);
        });
      }
    });
  });
});

$(".dissolve").click(function () {
  // $(".overlay").toggleClass("hidden");
  $(".overlay").removeClass("show-modal");
  $(".overlay").addClass("hide-modal");
  clearTimeout(displayImg);
  $(".modal-img-active")
    .removeClass("modal-img-active")
    .addClass("modal-img-inactive");
  $("#crew-img-1").addClass("modal-img-active");
});

//Get Form Data
function getQuote(e) {
  const name = $("#full-name").val();
  const email = $("#email").val();
  const contact = $("#contact").val();
  const location = $("#location").val();
  const eventType = $("#event-type").val();
  const company = $("#company").val();
  const others = $("#other-event").val();
  const guests = $("#guests").val();

  const quote = {
    name: name,
    email: email,
    contact: contact,
    location: location,
    eventType: eventType,
    company: company,
    others: others,
    guests: guests,
  };

  const quoteCopy = {
    name: $("#full-name").val(),
    email: $("#email").val(),
    contact: $("#contact").val(),
    location: $("#location").val(),
    eventType: $("#event-type").val(),
    company: $("#company").val(),
    others: $("#other-event").val(),
    guests: $("#guests").val(),
  };

  console.log(quote);
  console.log(quoteCopy);
  alert("Submiited");
}

$(document).ready(function () {
  // Dynmic Form Manupilation //
  $("#event-type").on("change", function () {
    // console.log(this.value);
    $("#crowd").toggleClass("hidden");
    if (this.value === "other") {
      $("#others").toggleClass("hidden");
      $("#crowd").removeClass("hidden");
      $("#company").addClass("hidden");
    } else if (this.value === "celebration") {
      $("#others, #company").addClass("hidden");
      $("#crowd").removeClass("hidden");
    } else if (this.value === "corporate") {
      $("#company").toggleClass("hidden");
      $("#others").addClass("hidden");
      $("#crowd").removeClass("hidden");
    } else if (this.value === "wedding") {
      $("#others,#company").addClass("hidden");
      $("#crowd").removeClass("hidden");
    } else if (this.value === "-1") {
      $("#others,#company,#crowd").addClass("hidden");
    }
  });

  $("#submitBtn").click(function () {
    let x = $("#quote-form").serializeArray();
    alert(x);
    console.log(x);
    // console.log("Clic?ked");
  });
});
