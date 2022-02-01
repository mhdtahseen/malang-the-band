const achievementMore = document.querySelector(".achievements-more");

const showBtn = document.getElementById("achievement-btn-show");
const hideBtn = document.getElementById("achievement-btn-hide");

// console.log(achievementMore, showBtn);

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
      }
    });
  });
});

$(".dissolve").click(function () {
  // $(".overlay").toggleClass("hidden");
  $(".overlay").removeClass("show-modal");
  $(".overlay").addClass("hide-modal");
});
