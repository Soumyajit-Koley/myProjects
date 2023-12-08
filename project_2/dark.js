function calc() {
  var A = parseFloat(document.getElementById("Text1").value);
  var B = parseFloat(document.getElementById("Text2").value);
  var C = parseFloat(document.getElementById("Text3").value);
  var D = parseFloat(document.getElementById("Text4").value);
  var E = parseFloat(document.getElementById("Text5").value);
  var F = parseFloat(document.getElementById("Text6").value);
  var G = parseFloat(document.getElementById("Text7").value);
  var H = parseFloat(document.getElementById("Text8").value);
  if (
    isNaN(A) ||
    A < 1 ||
    A > 10 ||
    isNaN(B) ||
    B < 1 ||
    B > 10 ||
    isNaN(C) ||
    C < 1 ||
    C > 10 ||
    isNaN(D) ||
    D < 1 ||
    D > 10 ||
    isNaN(E) ||
    E < 1 ||
    E > 10 ||
    isNaN(F) ||
    F < 1 ||
    F > 10 ||
    isNaN(G) ||
    G < 1 ||
    G > 10 ||
    isNaN(H) ||
    H < 1 ||
    H > 10
  ) {
    document.getElementById("result1").innerHTML = "Enter Value Between 1-10";
  } else {
    document.getElementById("result1").innerHTML =
      "Your CGPA is : " +
      ((A + B) / 2 + (C + D) / 2 + (1.5 * (E + F)) / 2 + (1.5 * (G + H)) / 2) /
        5;
  }
}
function clearh() {
  document.getElementById("Text1").value = "";
  document.getElementById("Text2").value = "";
  document.getElementById("Text3").value = "";
  document.getElementById("Text4").value = "";
  document.getElementById("Text5").value = "";
  document.getElementById("Text6").value = "";
  document.getElementById("Text7").value = "";
  document.getElementById("Text8").value = "";
  document.getElementById("result1").value = "";
}
