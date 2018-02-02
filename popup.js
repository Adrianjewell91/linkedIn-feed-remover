document.getElementsByClassName("feed-right-rail")[0].setAttribute("style", "display:none");
document.getElementsByClassName("core-rail")[0].setAttribute("style", "display:none");

setInterval(function() {
  if (window.location.href === "https://www.linkedin.com/feed/") {
    document.getElementsByClassName("feed-right-rail")[0].setAttribute("style", "display:none");
    document.getElementsByClassName("core-rail")[0].setAttribute("style", "display:none");
  }
}, 200);
