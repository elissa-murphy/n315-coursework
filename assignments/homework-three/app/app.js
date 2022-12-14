import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  //replace hashtag with a slash in url
  let pageID = hashTag.replace("#", "");
  let pageIDArray = pageID.split("/");
  pageID = pageIDArray[0];
  let subPageID = pageIDArray[1];

  //make home page the default page
  if (pageID == "") {
    MODEL.changePage("home");
  } else {
    if (pageID == subPageID) {
      MODEL.changePage(subPageID);
    } else {
      MODEL.changePage(pageID, subPageID);
    }
  }
}

//Initializing functions
function initApp() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initApp();
});
