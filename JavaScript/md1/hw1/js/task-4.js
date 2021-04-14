const pricePerDroid = 3000;
let theNumberOfDroid = prompt(
  "Введіть число ремонтних дроїдів, які Ви хочете купити!"
);

let totalPrice;
let costAftB;

if (!theNumberOfDroid) {
  console.log("Скасовано користувачем!");
} else {
  if (theNumberOfDroid * 1) {
    totalPrice = theNumberOfDroid * pricePerDroid;

    if (totalPrice > credits) {
      console.log("Недостатньо коштів на рахунку!");
    } else {
      costAftB = credits - totalPrice;
      console.log(
        "Ви купили ${theNumberOfDroid} дроїд(ів), на рахунку залишилося ${costAftB} кредитів."
      );
      alert(
        "Ви купили ${theNumberOfDroid} дроїд(ів), на рахунку залишилося ${costAftB} кредитів."
      );
    }
  } else {
    console.log("Не коректні дані!!!");
  }
}
