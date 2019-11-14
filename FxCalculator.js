var USD = {
  "AUD": 0.8371,
  "CAD": 0.8711,
  "CNY": 0.1620,
  "EUR": 1.2315,
  "GBP": 1.5683,
  "NZD": 0.7750,
  "JPY": 0.0083,
  "CZK": 0.0446,
  "DKK": 0.1655,
  "NOK": 0.1421
};
var convertedvalue;

$(document).on('click', '.Fx-Calculator-Submit-Button', function () {
  var inputvalueforconverting = $(".Fx-Calculator-Converting-Input-Value").val().split(" ");
  var inputvalueforconvertingtounit = $(".Fx-Calculator-Converting-Input-Value-To").val().toUpperCase();
  var inputvalueforconvertingunit = inputvalueforconverting[0].toUpperCase();
  var inputvalueforconvertingnumber = parseFloat(inputvalueforconverting[1]);


  if (inputvalueforconvertingunit == inputvalueforconvertingtounit) {
    convertedvalue = inputvalueforconvertingnumber;
  } else if (inputvalueforconvertingunit == "USD" || inputvalueforconvertingtounit == "USD") {
    if (inputvalueforconvertingunit == "USD") {
      convertedvalue = inputvalueforconvertingnumber / USD[inputvalueforconvertingtounit];
    } else {
      convertedvalue = inputvalueforconvertingnumber * USD[inputvalueforconvertingunit];
    }

  } else if (typeof (USD[inputvalueforconvertingunit]) == "undefined" || typeof (USD[inputvalueforconvertingtounit]) == "undefined") {
    alert("Unable to find rate for " + inputvalueforconvertingunit + "/" + inputvalueforconvertingtounit);
  } else if (inputvalueforconvertingunit != inputvalueforconvertingtounit) {
    var usdvalueofconvertingnumber = inputvalueforconvertingnumber * USD[inputvalueforconvertingunit];
    convertedvalue = usdvalueofconvertingnumber / USD[inputvalueforconvertingtounit];
  }
  if (inputvalueforconvertingtounit == "JPY") {
    convertedvalue = parseInt(convertedvalue);
  } else {
    convertedvalue = convertedvalue.toFixed(2);
  }
  convertedvalue = "" + inputvalueforconvertingtounit + " " + convertedvalue;
  $(".Converted-Value-Result").html("Converted Value is : " + convertedvalue);
});


$(document).on('click', '.Fx-Calculator-Clear-Button', function () {
  $(".Converted-Value-Result").html("");
  $(".Fx-Calculator-Converting-Input-Value").val(" ");
  $(".Fx-Calculator-Converting-Input-Value-To").val(" ");
});