document.getElementById('container').onchange = function() {
  var bill = Number(document.getElementById('billTotal').value);
  var tipPercent = document.getElementById('tipInput').value;
  var splitNumberPeople = document.getElementById('splitInput').value;
  var tipValue = Math.round(bill * (tipPercent / 100));
  var newBillEach = Math.round((bill + tipValue) / splitNumberPeople);

  document.getElementById('tipOutput').innerHTML = tipPercent + '%';
  document.getElementById('splitOutput').innerHTML = splitNumberPeople;
  document.getElementById('newBill').innerHTML = '$' + newBillEach;
  document.getElementById('tip').innerHTML ='$' + tipValue / splitNumberPeople;
}