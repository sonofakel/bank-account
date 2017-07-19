// Global Variables -->
var balance;
var deposit;
var withdrawal;

// Business Logic -->
function BankAccount(initDep) {
  this.initDep = initDep;
}

function Calc(deposit, withdrawal) {
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

Calc.prototype.dep = function() {
  return balance + deposit;
}

Calc.prototype.with = function() {
  return balance - withdrawal;
}
// BankAccount.prototype.withdrawal = function() {
//   return balance - withdrawal;
// }


// UI Logic -->
$(function() {
  debugger;
  $("#register").submit(function(event){
    event.preventDefault();

    var initDep = parseInt($("#init-dep").val());

    var newAccount = new BankAccount(initDep);

    balance = initDep;

    $(".current").text(newAccount.initDep);

  });

  $("#trans").submit(function(event){
    event.preventDefault();

    var depositValue = parseInt($("#deposit").val());
    var withValue = parseInt($("#with").val());

    deposit = depositValue;
    withdrawal = withValue;

    var newCalc = new Calc(depositValue, withValue);

    $(".current").text(newCalc.dep);
    // $(".output1").show();
    $(".current-withdrawal").text(newCalc.with);
    // $(".output2").show();
  });

});
