var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
// ...........................server time......................
function updateServerTime() {
  var serverTimeElement = document.getElementById("server-time");

  var serverTime = new Date();

  var hours = serverTime.getHours().toString().padStart(2, "0");
  var minutes = serverTime.getMinutes().toString().padStart(2, "0");
  var seconds = serverTime.getSeconds().toString().padStart(2, "0");
  var formattedTime = hours + ":" + minutes + ":" + seconds;

  serverTimeElement.textContent = formattedTime;
}

setInterval(updateServerTime, 1000);
// ................................................loader....................................

var loader = document.getElementById("preload");
window.addEventListener("load",function(){
  loader.style.display="none";
})