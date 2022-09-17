import * as MODEL from "./model.js";

function initListeners() {
  $("a").click((e) => {
    e.preventDefault();
    let btnID = e.currentTarget.id;
    MODEL.setCurrentPageContent(btnID);
  });
}

$(document).ready(function () {
  //NEEDS TURNED ON WHEN COMPLETE
  MODEL.setCurrentPageContent("home");
  initListeners();
});
