function Rolldice() {
  var terning = document.getElementById("terning");
  var roulette = document.getElementById("roulette");
  var status = document.getElementById("status");
  var d1 = math.floor(math.random() * 6) + 1;
  var r1 = math.floor(math.random() * 36) + 1;
  var dicetotal = d1 + r1;
  terning.innerHTML = d1;
  roulette.innerHTML = r1;
  status.innerHTML = "du rullede" + dicetotal + ".";
}
