// if,else ->nuhtsul shalgah ( tentsuu bnu? ih bnu ?bga bnu gedgiig shalgan)
// >,< ==, !=, >=, <=
var nas=18;
if(nas>17){
	console.log("Nasand hursen");
}else{
	console.log("nasand hureegui");
}
var une=30000;
if(une>50000){
	console.log(" ih")
}else{
	console.log(" baga ")
}
var too=5; too2=10;
if(too>too2){
	console.log(too1+"baga")
}else{
	console.log(too2+"ih")
}	
var hasah=1; 
if(hasah<0){
	console.log(hasah+"surug")
}else{
	console.log("ereg")
}	
var num=8;
if(num%2==0){
	console.log("tegsh too");
}else{
	console.log("sondgoi too")
}
// &&-> AND/bas, ||-> OR/esvel
// 35 5 bas 7-d zereg huvaagdahuu
var too5=35;
if(too5%5==0 && too5%7==0){
	console.log("huvaagdana")
}else{
	console.log("huvaagdahgui")
}
var age = 2;
if(age>=1 && age<3){
console.log("nylh")
}else if(age>=3 && age<5) {
	console.log("balchir");
}
var number1=1; number2=5; number3=10;
if(number1>number2 && number1>number3){
	console.log(number1+'ih');
}else if(number2>number1 && number2>number3){
	console.log(number2+"ih");
}else {
	console.log(number3+'ih');
}
var dun=-1
if(dun>=100 && dun>=90 ){
	console.log('A')
}else if(dun>=90 && dun>=80){
	console.log('B');
}else if(dun>=80 && dun>=70){
	console.log('c');
}else if(dun>=70 && dun>=60){
	console.log('d');
}else if(dun>=50 && dun>=0){
	console.log('f');
}
else{
	console.log('buruu')
}
alert('Ta tanihgui barilgad serlee');
alert('Ta barilaas garhiin tuld hamgiin dood davhart ochih yostoi bogood ta odoo hamgiin deed davhart bn');
alert('davhar bolgon uuriin gesen nuutstai');
var songolt1=prompt('dooshoo buuh/endee uldah');
if(songolt1=="dooshoo buuh"){
	alert ('ta daraagiin davhart ochoj chadlaa');
	alert('daraagiin davhar mash harnhui tul ta yuch har chadahgui')
	var songolt2=prompt('baruun yavh/zuun yavh')
	if(songolt2=="zuun yavah"){
		alert('Ta dooshoo unj daraachin davhart irlee')
	}else if(songolt2=="baruun yavah"){
		alert('ta nohio toi taarch uhlee')
	}
	var songolt3=prompt('baruun yavah/zuun yavah/chigeeree yavah')
	if(songolt3=="baruun yavah")
		alert ('ta aluurchintai taarch uhlee')
	else if(songolt3=="zuun yavah")
		alert('ta aluurchnii urhind orj uhlee')
	else if(songolt3=="chigeeree yavah")
		alert('ta amjilttai zugtaj gertee harilaa')
}else if(songolt1=="endee uldeh"){
	alert('ta itgeltei bnu')
	var s1=prompt('tiim/ugui')
	alert('ta turj uhlee')
	
}