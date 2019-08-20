let btnEl = document.getElementById("btn");
let formEl = document.getElementById("form");

const calc = () => {
  var billTotal = document.getElementById("billTotal").value;
  var tippings = document.getElementById("tippings").value;
  var split = document.getElementById("split").value;

  if ( isNaN(billTotal) || billTotal == " " || billTotal <= 0){
    alert("Please enter bill total as an integer > 0");
    return;
  }
  if (tippings == "std"){
    alert("Please select tip amount");
    return;
  }
  if (split == " " || split <= 0){
    alert("Please select the number of persons tipping");
    return;
  }
  if (split == 1){
    var each = "";
  } else if (split > 1) {
    each = "each";
  }
  btnEl.style.backgroundColor = "#4b5e49";
  btnEl.textContent = "Calculated";
  btnEl.removeEventListener("click", calc);

  var tipAmt = (tippings*billTotal/split).toFixed(2);
  var tipDiv = document.createElement("div");
  form.appendChild(tipDiv);
  tipDiv.className = "appended";
  tipDiv.innerHTML =  "Your total: $ " + tipAmt + " " + each;

  btn.style.cursor = "default";
}
const listener = () => {
    btnEl.style.backgroundColor = "#4CAF50";
    btnEl.style.cursor = "pointer";
    btnEl.textContent = "Calculate";
}

formEl.addEventListener("keyup",listener);
btnEl.addEventListener("click",calc);
