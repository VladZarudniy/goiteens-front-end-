let number = prompt('Write here pls your number');
if (number>54 && number<100)
	console.log('The number falls within the range');
else
	console.log('The number does not fall within the range');
//
//
//
let Year = 55;
if(Year<=16)
	console.log('Kids');
else if(Year>=17 && Year <= 60)
	console.log('Adults');
else if(Year>= 61 && Year <= 100)
	console.log('Retirees');
//
//
//
let name = 'Vlad'
let name2 = 'Zarudniy'
if (name.length > 4 && name2.length>5){
	console.log(name.length+name2.length);
}
else {
	console.log('UPS');
}
//
//
//
//
let ramdom = Math.random()+(5-1)+1;
if (ramdom) {
	if (ramdom === 1) {
		alert('Its namber 1')
	}
	else if (ramdom === 2){
		alert('Its namber 2')
	}
	else if (ramdom === 3){
		alert('Its namber 3')
	}
	else if(ramdom === 4){
		alert('Its namber 4')
	}
	else if(ramdom === 5){
		alert('Its namber 5')
	}
	else{
		alert('Isn\'t correct number')
	}
}

let lang = 'ua';
let ln;
switch (lang) {

	case 'ua':
		ln = 'Березень';
		break;

	case 'ru':
		ln = 'Март';
		break;

	case 'en':
		ln ='March';
		break;

	case 'fr':
		ln = 'Mars';
		break;

	default:
		console.log('I don\'t now contry');
}
console.log(ln)