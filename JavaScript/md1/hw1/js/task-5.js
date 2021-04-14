let Contry = prompt("");
// let Contry = toLowerCase(Contry_pr)
let cost;

switch (Contry) {
  case "Китай":
    cost = 100;
    alert(`Доставка в ${Contry} буде коштувати ${cost} кредитів`);
    break;

  case "Чилі":
    cost = 250;
    alert(`Доставка в ${Contry} буде коштувати ${cost} кредитів`);
    break;

  case "Австралія":
    cost = 170;
    alert(`Доставка в ${Contry} буде коштувати ${cost} кредитів`);
    break;

  case "Індія":
    cost = 80;
    alert(`Доставка в ${Contry} буде коштувати ${cost} кредитів`);
    break;

  case "Ямайка":
    cost = 120;
    alert(`Доставка в ${Contry} буде коштувати ${cost} кредитів`);
    break;

  default:
    alert("У вашій країні доставка недоступна");
}
