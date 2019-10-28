var bandingkanAngka = (angka1, angka2) => {
   if(angka2>angka1){
       return true;
   } else if (angka1>angka2) {
       return false;
   } else {
       return -1;
   }
  }

console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
console.log('\n')


//////////////////////////////////////////////////////
/////////////////////////////////////////////////////


var balikKata = (kata) => {
    var dibalik='';
    for (var i=kata.length-1; i>=0; i-- ){
        dibalik+=kata[i]
    }
    return dibalik
  }

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
console.log('\n')


////////////////////////////////////////////////////
///////////////////////////////////////////////////


function konversiMenit(menit) {
    var jam=0;
    var space='';
    if (menit>=60){
        space=menit%60;
        jam=menit/60;
        if(space<10){
            return `${parseInt(jam)}:0${space}`;
        } else {
            return `${parseInt(jam)}:${space}`
        }
    } else {
        return `${jam}:${menit}`
    }
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  console.log('\n')



  ////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////


  function xo(str) {
    var x = o = 0;
    for (var i=0; i<str.length; i++) {
        if(str [i]== 'x'){
            x++;
        } else if (str [i]== 'o') {
            o++;
        }
    }if (x==o) {
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true