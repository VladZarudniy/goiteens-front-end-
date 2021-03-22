let credits = 23580;
let pricePerDroid = 3000
let hmDroid = prompt('Яку кількість дроїдів ви хочету купити?')
if(hmDroid == null){
    console.log('Скасовано користувачем!')
}else{
let totalPrice = pricePerDroid * hmDroid
let credits_AfBDr = credits - totalPrice
if(credits_AfBDr >= 0){
    console.log(`Ви купили ${hmDroid} дроїдів, на рахунку залишилося ${credits_AfBDr} кредитів.`)
}else{
    console.log('Недостатньо коштів на рахунку!')
}
}