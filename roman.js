
const convertBtn = document.getElementById('convert-btn');
const num=document.getElementById('number')
convertBtn.addEventListener('click',()=> {
 if(num.value==='') {
   output.textContent='Please enter a valid number'
 }
})

convertBtn.addEventListener('click',()=> {
 if(num.value<= -1 ) {
   output.textContent='Please enter a number greater than or equal to 1'
 }
})

convertBtn.addEventListener('click',()=> {
 if(num.value>=4000) {
   output.textContent='Please enter a number less than or equal to 3999'
 }

})

// convertBtn.addEventListener('click',()=> {
//   if(num.value==9) {
//     output.textContent='IX'
//   }
// })
// convertBtn.addEventListener('click',()=> {
//   if(num.value ==16 ) {
//     output.textContent='XVI'
//   }
// })
// convertBtn.addEventListener('click',()=> {
//   if(num.value ==649 ) {
//     output.textContent='DCXLIX'
//   }
// })
// convertBtn.addEventListener('click',()=> {
//   if(num.value ==1023  ) {
//     output.textContent='MXXIII'
//   }
// })


// convertBtn.addEventListener('click',()=> {
//   if(num.value ==3999  ) {
//     output.textContent='MMMCMXCIX'
//   }
// })




function convertRoman(input) {
const numerals= [
   {value:1000,numeral:'M'},
   {value:900,numeral:'CM'},
   {value:500,numeral:'D'},
   {value:400,numeral:'CD'},
   {value:100,numeral:'C'},
   {value:90,numeral:'XC'},
   {value:50,numeral:'L'},
   {value:40,numeral:'XL'},
   {value:10,numeral:'X'},
   {value:9,numeral:'IX'},
   {value:5,numeral:'V'},
   {value:4,numeral:'IV'},
   {value:1,numeral:'I'},
]

let roman=''

for(let i =0;i < numerals.length;i++) {
 while(input >= numerals[i].value) {
   roman += numerals[i].numeral;
 input -= numerals[i].value
 }

}

return roman
}




function display() {


const inputNumber = document.getElementById('number').value;
 const output = document.getElementById('output');

 const romanNumeral = convertRoman(parseInt(inputNumber));
 output.textContent = `${romanNumeral}`;

 

}

