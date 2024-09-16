                        /* 1st question answer*/

function calculateDifference(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let result= a-b;
    console.log(result);
}

                        /* 2nd question answer*/
function isOdd(){
    let x= document.getElementById('number1').value;
    if(x%2 !==0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

                        /* 3rd question answer*/

let arry=[23,34,43,12,45,6,31];
let x= arry.length;

function findMin(arry){
    let min=arry[0]

    for(i=1;i<x;i++){

        if(arry[i]<min){

            min=arry[i]
        }
    }
    return min
}
console.log("Find Min =",findMin(arry))




                        /* 4th question answer*/


let arrynum=[33,25,66,84,21,66,14,17,98,54,24,88];

let result=arrynum.filter(function(item){
    return item%2 ===0
});

console.log("Filter Even Numbers = ", result)


                        /* 5th question answer*/

let numarry=[34,25,67,234,12,46,79,64,23,46,29,22]

   let answer= numarry.sort().reverse();
    console.log("Sort Array Descending = ",answer)


                        /* 6th question answer*/

function lowercaseFirstLetter(){
    let letter = document.getElementById('low').value;
    let result = letter.charAt(0).toLowerCase() + letter.slice(1);
    console.log(result);
}


                        /* 7th question answer*/

  function countVowels(){
    let usernam= document.getElementById('nam').value;
    let vowel=['a','e','i','o','u'];

    let i= 0;

         for(cha of usernam){
            if(vowel.includes(cha)){
                i++
               }
         }
            console.log(i);
    }
        


    let array=['5','6','2','7','9','7','3'];

    function findAverage(array){
        let sum = 0;
        for(i=0;i<array.length;i++){
              sum += arry[i]
        }

        return sum/array.length;
    }

    console.log(findAverage(array));