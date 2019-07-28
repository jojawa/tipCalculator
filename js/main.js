var btnEl = document.getElementById("btn");

var calc = function(){
  var billTotal = document.getElementById("billTotal").value;
  var tippings = document.getElementById("tippings").value;
  var split = document.getElementById("split").value;

  if (billTotal == " " || billTotal <= 0){
    alert("Please enter bill total");
    return;
  }
  if (tippings == "std"){
    alert("Please select tip amount");
    return;
  }
  if (split == " " || split <= 0){
    alert("Please enter the number of persons tipping");
    return;
  }
  btnEl.style.backgroundColor = "#4b5e49";
  btnEl.textContent = "Calculated";
}
var listener = function (){
  if (billTotal != "" && tippings != "std" && split != ""){
    btnEl.style.backgroundColor = "#4CAF50";
    return;
  }
}
btnEl.addEventListener("keyup",listener);
btnEl.addEventListener("click",calc);
