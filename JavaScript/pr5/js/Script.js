let num = 1 
do{
	console.log(`${num}`)
	num = 1+num
}while (num <= 10); 
//
//
//
//
//
let number = 1
while(number <= 10 ){
	if (number%2){
		console.log('Число непарне')

	}else{
		console.log('Число парне')
	}
number +=1
}
//
//
//
//
//
let num2 = 20
while(num2 <= 28){
	console.log(num2)
	num2 +=1
}
//
//
//
//
//
let name =''
do {
    Name = prompt("Введіь ім'я свого улюбленого героя!");
    if (Name) {
        console.log(Name);
    } else {
        console.log('Були введені не коректні дані! Cпробуйте ще раз!');
    }
} while (Name.length < 6);