function shoutOut() {
    console.log('Halo Function');
}

shoutOut()

console.log('\n')

var num1 = 5;
var num2 = 6;

var calculateMultiply = (num1, num2) => {
    var hasilPerkalian = num1 * num2;
    return hasilPerkalian;
}



var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

console.log('\n')


var processSentence = (name,age,address,hobby) =>{
    var fullSentence = (`Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`)
    return fullSentence
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);