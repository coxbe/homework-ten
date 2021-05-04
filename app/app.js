import * as MODEL from "../model/model.js";
var currentHeroImage = "home";

function init() {
  $("nav a").click(function (e) {
    let btnId = this.id;
    let contentID = btnId + "Content";
    console.log("Nav clicked");

    if (btnId == "home") {
      $(".hero").css("display", "block");
      $(".hero").removeClass("${currentHeroImage}-hero-image");
      $("#app").removeClass("otherPadding").addClass("homePadding");
      // $("section.blacknav").removeClass("blacknav").addClass("whitenav");

      currentHeroImage = btnId;
      MODEL.getPageContent(contentID);
    } else if (btnId == "about") {
      removeHero(currentHeroImage);
      $("whitenav").removeClass("whitenav").addClass("blacknav");

      MODEL.getPageContent(contentID);
    } else if (btnId == "offers") {
      removeHero(currentHeroImage);
      $("whitenav").removeClass("whitenav").addClass("blacknav");

      MODEL.getPageContent(contentID);
    } else if (btnId == "tours") {
      removeHero(currentHeroImage);
      $("whitenav").removeClass("whitenav").addClass("blacknav");

      MODEL.getPageContent(contentID);
    } else if (btnId == "contact") {
      removeHero(currentHeroImage);
      $("whitenav").removeClass("whitenav").addClass("blacknav");

      MODEL.getPageContent(contentID);
    } else if (btnId == "blog") {
      removeHero(currentHeroImage);
      addPromoListeners();
      MODEL.getPageContent(contentID);
    } else if (btnId == "home") {
      $(".blacknav").removeClass("blacknav").addClass("whitenav");
      addPromoListeners();
      MODEL.getPageContent(contentID);
    } else {
      removeHero(currentHeroImage);
      MODEL.getPageContent(contentID);
    }

    $(".hero-content .page-name").html(btnId);
  });

  $(".outside a").click(function (e) {
    console.log("here");
  });
}

function removeHero(currentHeroImage) {
  $(".hero").removeClass(`${currentHeroImage}-hero-image`);
  $(".hero").css("dislay", "none");
  $("#app").removeClass("homePadding").addClass("otherPadding");
  currentHeroImage - currentHeroImage;
}

function addPromoListeners() {
  // paste the promo listeners here
  $("#app .about .heroThree a").click(function (e) {
    console.log(this.id);
  });

  $(".blog_div").click(function (e) {
    MODEL.getPageContent();
  });
}

$(document).ready(function () {
  init();
  MODEL.getPageContent("homeContent");
  $("#app").addClass("homePadding");
});
